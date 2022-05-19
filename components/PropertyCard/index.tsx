/* eslint-disable no-console */
import React, { useState } from "react"
import Surface from "../Assets/Surface"
import Bedroom from "../Assets/Bedroom"
import Bathroom from "../Assets/Bathroom"
import ArrowRight from "../Assets/ArrowRight"
import ArrowLeft from "../Assets/ArrowLeft"
import { Card, ArrowContainer, Arrow } from "./styles"

interface CardInterface {
  photos: {
    description: string
    image: string
    is_blueprint: boolean
    is_front_cover: boolean
    order: number
    original: string
    thumb: string
  }[]
  operation_type: string
  description: string
  price: { currency: string; period: number; price: number }
  surface: string
  surface_measurement: string
  room_amount: number
  toilet_amount: number
}

function PropertyCard({
  photos,
  operation_type,
  description,
  price,
  surface,
  surface_measurement,
  room_amount,
  toilet_amount,
}: CardInterface) {
  const [currentPhoto, setCurrentPhoto] = useState<{
    description: string
    image: string
    is_blueprint: boolean
    is_front_cover: boolean
    order: number
    original: string
    thumb: string
  }>(photos[0])

  const amountOfPhotos = photos.length
  const [counter, setCounter] = useState<number>(1)

  const goNext = () => {
    const findIndex = photos.findIndex(photo => photo === currentPhoto)
    setCounter(counter + 1)
    const count = counter + 1
    if (count < amountOfPhotos) {
      setCurrentPhoto(photos[findIndex + 1])
    } else {
      setCounter(amountOfPhotos)
    }
  }

  const goPrev = () => {
    const findIndex = photos.findIndex(photo => photo === currentPhoto)
    setCounter(counter - 1)
    const count = counter - 1
    if (count > 0) {
      setCurrentPhoto(photos[findIndex - 1])
    } else {
      setCounter(1)
    }
  }

  return (
    <Card>
      <div className="photoContainer">
        {photos.length > 0 ? (
          <>
            <ArrowContainer>
              <Arrow onClick={goPrev}>
                <ArrowLeft />
              </Arrow>
              <Arrow onClick={goNext}>
                <ArrowRight />
              </Arrow>
            </ArrowContainer>
            <img alt={currentPhoto.description} src={currentPhoto.image} />
          </>
        ) : (
          <div className="photos">
            <p>FOTO NO DISPONIBLE</p>
          </div>
        )}
      </div>
      <div className="content">
        <div className="operationType">{operation_type}</div>
        <p className="description">{description.slice(0, 150)}...</p>
        <div className="amount">
          <p className="price">{price.price}</p>
          <p className="currency">
            <b> {price.currency}</b>
          </p>
        </div>
        <div className="tags">
          <p className="surface">
            <Surface />
            {surface}
            <p>{surface_measurement} totales</p>
          </p>
          <p className="surface">
            <Bedroom />
            {room_amount} dormitorios
          </p>
        </div>
        <div className="tags">
          <p className="surface">
            <Bathroom />
            {toilet_amount} baños
          </p>
        </div>
      </div>
    </Card>
  )
}

export default PropertyCard
