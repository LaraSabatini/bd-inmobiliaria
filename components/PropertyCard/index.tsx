import React, { useState } from "react"
import { useRouter } from "next/router"
import Surface from "../Assets/Surface"
import Bedroom from "../Assets/Bedroom"
import Bathroom from "../Assets/Bathroom"
import ArrowRight from "../Assets/ArrowRight"
import ArrowLeft from "../Assets/ArrowLeft"
import Pool from "../Assets/Pool"
import { Card, ArrowContainer, Arrow } from "./styles"

interface CardInterface {
  id: number
  photos: {
    img: string
    alt: string
  }[]
  operation_type: string
  description: string
  time_periods: {
    month: string
    price: number
    agent: string
  }[]
  meters_covered: number
  bedrooms: number
  bathrooms: number
  pool: boolean
}

function PropertyCard({
  id,
  photos,
  operation_type,
  description,
  time_periods,
  meters_covered,
  bedrooms,
  bathrooms,
  pool,
}: CardInterface) {
  const router = useRouter()

  const setRoute = (prorperty_id: number) => {
    router.push(`/rents/${prorperty_id}`)
  }

  const [currentPhoto, setCurrentPhoto] = useState<{
    img: string
    alt: string
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
    <Card key={id}>
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
            <img
              alt={currentPhoto?.alt}
              src={`https://drive.google.com/uc?export=view&id=${currentPhoto?.img}`}
            />
          </>
        ) : (
          <div className="photos">
            <p>NO HAY FOTOS ADJUNTAS</p>
          </div>
        )}
      </div>
      <button className="card" type="button" onClick={() => setRoute(id)}>
        <div className="content">
          <div className="operationType">{operation_type}</div>
          {description === "-" ? (
            <p className="description">{description}</p>
          ) : (
            <p className="description">{description.slice(0, 50)}...</p>
          )}
          <div className="amount">
            <p className="price">{time_periods[0].price}</p>
            <p className="currency">
              <b> USD</b>
            </p>
          </div>
          <div className="tags" style={{ marginTop: "20px" }}>
            <p className="surface">
              <Surface />
              {meters_covered}
              <p>
                m<sup>2</sup> totales
              </p>
            </p>
            <p className="surface">
              <Bedroom />
              {bedrooms} dormitorios
            </p>
          </div>
          <div className="tags">
            <p className="surface">
              <Bathroom />
              {bathrooms} ba??os
            </p>
            <p className="surface">
              <Pool />
              {pool ? <p>con pileta</p> : <p>sin pileta</p>}
            </p>
          </div>
        </div>
      </button>
    </Card>
  )
}

export default PropertyCard
