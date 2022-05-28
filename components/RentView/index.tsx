import React, { useEffect, useState } from "react"
import { PropertyExcelInterface } from "../../interfaces/PropertyInterface"
import properties from "../../properties.json"
// import getSellProperties from "../../services/getSellProperties.service"
import PropertyCard from "../PropertyCard"
import Container from "./styles"

function RentView() {
  const allProperties = properties

  const [list, setList] = useState<any[]>([])

  const getProperties = () => {
    // const res = await getSellProperties()
    // setList(res.data.objects)
    const filtered = allProperties.filter(
      (property: PropertyExcelInterface) =>
        property.operation_id === 2 && property.active,
    )

    setList(filtered)
  }

  useEffect(() => {
    getProperties()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {list.length > 0 &&
        list.map((property: PropertyExcelInterface) => (
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
        ))}
    </Container>
  )
}

export default RentView
