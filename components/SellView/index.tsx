import React, { useEffect, useState } from "react"
import { PropertyExcelInterface } from "../../interfaces/PropertyInterface"
import getSellProperties from "../../services/getSellProperties.service"
import PropertyCard from "../PropertyCard"
import PropertyView from "../PropertyView"
import Container from "./styles"

function SellView() {
  const [list, setList] = useState<PropertyExcelInterface[]>([])
  const [id, setId] = useState<PropertyExcelInterface>()

  const getProperties = async () => {
    const res = await getSellProperties()
    setList(res.data.objects)
  }

  useEffect(() => {
    getProperties()
  }, [])

  return (
    <Container>
      {id === undefined &&
        list.length > 0 &&
        list.map(property => (
          <button
            className="card"
            type="button"
            key={property.id}
            onClick={() => {
              setId(property)
            }}
          >
            <PropertyCard
              photos={property.photos}
              id={property.id}
              operation_type={property.operation_type}
              description={property.description}
              time_periods={property.time_periods}
              meters_covered={property.meters_covered}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              pool={property.pool}
            />
          </button>
        ))}
      {id === undefined && <PropertyView data={id} />}
    </Container>
  )
}

export default SellView
