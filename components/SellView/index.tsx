import React, { useEffect, useState } from "react"
import { PropertyInterface } from "../../interfaces/PropertyInterface"
import getSellProperties from "../../services/getSellProperties.service"
import PropertyCard from "../PropertyCard"
import PropertyView from "../PropertyView"
import Container from "./styles"

function SellView() {
  const [list, setList] = useState<PropertyInterface[]>([])
  const [id, setId] = useState<number>(0)

  const getProperties = async () => {
    const res = await getSellProperties()
    setList(res.data.objects)
  }

  useEffect(() => {
    getProperties()
  }, [])

  return (
    <Container>
      {id === 0 &&
        list.length > 0 &&
        list.map(property => (
          <button
            className="card"
            type="button"
            key={property.id}
            onClick={() => {
              setId(property.id)
            }}
          >
            <PropertyCard
              photos={property.photos}
              operation_type="VENTA"
              description={property.description}
              price={property.operations[0].prices[0]}
              surface={property.surface}
              surface_measurement={property.surface_measurement}
              room_amount={property.room_amount}
              toilet_amount={property.toilet_amount}
            />
          </button>
        ))}
      {id !== 0 && <PropertyView id={id} />}
    </Container>
  )
}

export default SellView
