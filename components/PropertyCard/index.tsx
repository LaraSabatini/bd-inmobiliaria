import React from "react"
import Surface from "../Assets/Surface"
import Bedroom from "../Assets/Bedroom"
import Bathroom from "../Assets/Bathroom"
import { Card } from "./styles"

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
  return (
    <Card>
      <p>
        {photos.length > 0 ? (
          photos.map(photo => <img alt={photo.description} src={photo.image} />)
        ) : (
          <div className="photos">
            <p>FOTO NO DISPONIBLE</p>
          </div>
        )}
      </p>
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
