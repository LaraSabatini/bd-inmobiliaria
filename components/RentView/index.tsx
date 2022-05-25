import React, { useEffect, useState } from "react"
import { PropertyInterface } from "../../interfaces/PropertyInterface"
import getSellProperties from "../../services/getSellProperties.service"
import PropertyCard from "../PropertyCard"
import Container from "./styles"

function RentView() {
  const [list, setList] = useState<PropertyInterface[]>([])

  const getProperties = async () => {
    const res = await getSellProperties()
    setList(res.data.objects)
  }

  useEffect(() => {
    getProperties()
  }, [])

  return (
    <Container>
      {list.length > 0 &&
        list.map(property => (
          <button
            className="card"
            type="button"
            key={property.id}
            // eslint-disable-next-line no-console
            onClick={() => console.log(property.id)}
          >
            <PropertyCard
              photos={property.photos}
              operation_type="ALQUILER"
              description={property.description}
              price={property.operations[0].prices[0]}
              surface={property.surface}
              surface_measurement={property.surface_measurement}
              room_amount={property.room_amount}
              toilet_amount={property.toilet_amount}
            />
          </button>
        ))}
    </Container>
  )
}

export default RentView
