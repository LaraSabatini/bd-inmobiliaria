import React, { useState } from "react"
import ArrowRight from "../Assets/ArrowRight"
import ArrowLeft from "../Assets/ArrowLeft"
import Bathroom from "../Assets/Bathroom"
import Bedroom from "../Assets/Bedroom"
import Pool from "../Assets/Pool"
import Grill from "../Assets/Grill"
import Playroom from "../Assets/Playroom"
import Dependency from "../Assets/Dependency"
import Size from "../Assets/Size"

import {
  SectionContainer,
  Slider,
  Address,
  Arrow,
  ArrowContainer,
  Description,
  Title,
  PriceContainer,
  Amenity,
  Price,
  Container,
} from "./styles"

interface PropertyViewInterface {
  data: any
}

function PropertyView({ data }: PropertyViewInterface) {
  const propertyData = data
  const [currentPhoto, setCurrentPhoto] = useState<{
    img: string
    alt: string
  }>(data?.photos[0])

  const amountOfPhotos = data?.photos?.length
  const [counter, setCounter] = useState<number>(1)

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
      <Address>{data?.address}</Address>
      <Container>
        <Slider>
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
            src={`https://drive.google.com/uc?export=view&id=${currentPhoto.img}`}
          />
        </Slider>
        <Description>
          <Title>ALQUILER</Title>
          <p className="description">{data?.description}</p>

          <div className="amenities">
            <Title>Amenities:</Title>
            <Amenity>
              <Bedroom />
              <p>{data?.bedrooms} dormitorios</p>
            </Amenity>
            <Amenity>
              <Bathroom />
              <p>{data?.bathrooms} baños</p>
            </Amenity>
            <Amenity>
              <Bathroom />
              {data?.toilette ? <p>con toilette</p> : <p>sin toilette</p>}
            </Amenity>
            <Amenity>
              <Pool />
              {data?.pool ? <p>con pileta</p> : <p>sin pileta</p>}
            </Amenity>
            <Amenity>
              <Grill />
              {data?.barbacue ? <p>con parrilla</p> : <p>sin parrilla</p>}
            </Amenity>
            <Amenity>
              <Playroom />
              {data?.playroom ? <p>con playroom</p> : <p>sin playroom</p>}
            </Amenity>
            <Amenity>
              <Dependency />
              {data?.dependency ? (
                <p>con dependencia</p>
              ) : (
                <p>sin dependencia</p>
              )}
            </Amenity>
            <Amenity>
              <Size />
              <p>
                {data?.meters_covered} m<sup>2</sup>
              </p>
            </Amenity>
          </div>
        </Description>
      </Container>
      <div
        style={{
          height: "fit-content",
          marginTop: "20px",
        }}
      >
        <Price>
          <Title>Precios:</Title>
          {data?.time_periods.map(time_period => (
            <PriceContainer>
              <p>{time_period.month}</p>
              <p>{time_period.price} USD</p>
            </PriceContainer>
          ))}
        </Price>
      </div>
    </SectionContainer>
  )
}

export default PropertyView
