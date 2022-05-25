import React, { useEffect, useState } from "react"
import { PropertyInterface } from "../../interfaces/PropertyInterface"
import getProperty from "../../services/getProperty.service"
import ArrowRight from "../Assets/ArrowRight"
import ArrowLeft from "../Assets/ArrowLeft"
import {
  SectionContainer,
  Slider,
  Address,
  Arrow,
  ArrowContainer,
  Description,
  Title,
} from "./styles"

interface PropertyViewInterface {
  id: number
}

function PropertyView({ id }: PropertyViewInterface) {
  const [propertyData, setPropertyData] = useState<PropertyInterface>()
  const [currentPhoto, setCurrentPhoto] = useState<{
    description: string
    image: string
    is_blueprint: boolean
    is_front_cover: boolean
    order: number
    original: string
    thumb: string
  }>()

  const amountOfPhotos = propertyData?.photos.length
  const [counter, setCounter] = useState<number>(1)

  const getData = async () => {
    const res = await getProperty(id)
    // eslint-disable-next-line no-console
    console.log(res.data)
    setPropertyData(res.data)
    setCurrentPhoto(res.data.photos[0])
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goNext = () => {
    const findIndex = propertyData?.photos.findIndex(
      photo => photo === currentPhoto,
    )
    setCounter(counter + 1)
    const count = counter + 1
    if (count < amountOfPhotos) {
      setCurrentPhoto(propertyData?.photos[findIndex + 1])
    } else {
      setCounter(amountOfPhotos)
    }
  }

  const goPrev = () => {
    const findIndex = propertyData?.photos.findIndex(
      photo => photo === currentPhoto,
    )
    setCounter(counter - 1)
    const count = counter - 1
    if (count > 0) {
      setCurrentPhoto(propertyData?.photos[findIndex - 1])
    } else {
      setCounter(1)
    }
  }

  return (
    <SectionContainer>
      <Address>
        {propertyData?.location.full_location} - {propertyData?.fake_address}
      </Address>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Slider>
          <ArrowContainer>
            <Arrow onClick={goPrev}>
              <ArrowLeft />
            </Arrow>
            <Arrow onClick={goNext}>
              <ArrowRight />
            </Arrow>
          </ArrowContainer>
          <img alt={currentPhoto?.description} src={currentPhoto?.image} />
        </Slider>
        <Description>
          <Title>
            ALQUILER{" "}
            <span>
              {propertyData?.operations[0].prices[0].price}{" "}
              {propertyData?.operations[0].prices[0].currency}
            </span>
          </Title>
          <p>{propertyData?.description}</p>
        </Description>
      </div>
    </SectionContainer>
  )
}

export default PropertyView
