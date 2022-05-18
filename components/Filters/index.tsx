import React, { useContext, useState } from "react"
import { PropertyInterface } from "../../interfaces/PropertyInterface"
import { FiltersContext } from "../../contexts/FilterContext"
import getProperties from "../../services/getProperties.service"
import HouseIcon from "../Assets/HouseIcon"
import Building from "../Assets/Building"
import Mapdot from "../Assets/Mapdot"
import Arrow from "../Assets/Arrow"
import PropertyCard from "../PropertyCard"
import { FilterContainer, Filter, Menu, CardContainer } from "./styles"

function Filters() {
  const {
    operationTypes,
    operationSelected,
    setOperationSelected,
    propertyTypes,
    zones,
    propertySelected,
    setPropertySelected,
    setZoneSelected,
    zoneSelected,
    neighborhoods,
    neighborhoodSelected,
    setNeighborhoodSelected,
    results,
    setResults,
  } = useContext(FiltersContext)

  const [operationMenu, setOperationMenu] = useState<boolean>(false)
  const [propertyMenu, setPropertyMenu] = useState<boolean>(false)
  const [zoneMenu, setZoneMenu] = useState<boolean>(false)
  const [neighborhoodMenu, setNeighborhoodMenu] = useState<boolean>(false)

  const searchProperties = async () => {
    const res = await getProperties()
    // eslint-disable-next-line no-console
    console.log(res.data)

    setResults(res.data.objects)
  }

  return (
    <>
      <FilterContainer>
        <Filter onClick={() => setOperationMenu(!operationMenu)}>
          <div>
            <HouseIcon />
            {operationSelected.operation_type}
          </div>
          <Arrow />
          {operationMenu && (
            <Menu>
              {operationTypes.map(
                (operation: { operation_type: string; id: number }) => (
                  <button
                    type="button"
                    onClick={() => setOperationSelected(operation)}
                  >
                    {operation.operation_type}
                  </button>
                ),
              )}
            </Menu>
          )}
        </Filter>
        <Filter onClick={() => setPropertyMenu(!propertyMenu)}>
          {propertyMenu && (
            <Menu>
              {propertyTypes.map(
                (property: { property_type: string; id: number }) => (
                  <button
                    type="button"
                    onClick={() => setPropertySelected(property)}
                  >
                    {property.property_type}
                  </button>
                ),
              )}
            </Menu>
          )}
          <div>
            <Building />
            {propertySelected.property_type}
          </div>
          <Arrow />
        </Filter>
        <Filter onClick={() => setZoneMenu(!zoneMenu)}>
          {zoneMenu && (
            <Menu>
              {zones.map((zone: { zone_type: string; id: number }) => (
                <button type="button" onClick={() => setZoneSelected(zone)}>
                  {zone.zone_type}
                </button>
              ))}
            </Menu>
          )}
          <div>
            <Mapdot />
            {zoneSelected.zone_type}
          </div>
          <Arrow />
        </Filter>
        <Filter onClick={() => setNeighborhoodMenu(!neighborhoodMenu)}>
          {neighborhoodMenu && (
            <Menu>
              {neighborhoods.map(
                (neighborhood: { neighborhood_type: string; id: number }) => (
                  <button
                    type="button"
                    onClick={() => setNeighborhoodSelected(neighborhood)}
                  >
                    {neighborhood.neighborhood_type}
                  </button>
                ),
              )}
            </Menu>
          )}
          <div>
            <Mapdot />
            {neighborhoodSelected.neighborhood_type}
          </div>
          <Arrow />
        </Filter>
        <button onClick={searchProperties} className="action" type="button">
          APLICAR
        </button>
      </FilterContainer>
      <CardContainer>
        {results !== undefined &&
          results.map((property: PropertyInterface) => (
            <PropertyCard
              photos={property.photos}
              operation_type={property.operations[0].operation_type}
              description={property.description}
              price={property.operations[0].prices[0]}
              surface={property.surface}
              surface_measurement={property.surface_measurement}
              room_amount={property.room_amount}
              toilet_amount={property.toilet_amount}
            />
          ))}
      </CardContainer>
    </>
  )
}

export default Filters
