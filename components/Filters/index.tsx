/* eslint-disable no-console */
import React, { useContext, useState } from "react"
import { PropertyExcelInterface } from "../../interfaces/PropertyInterface"
import { FiltersContext } from "../../contexts/FilterContext"
// import getProperties from "../../services/getProperties.service"
import properties from "../../properties.json"
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
    results,
    setResults,
  } = useContext(FiltersContext)

  const allProperties = properties

  const [operationMenu, setOperationMenu] = useState<boolean>(false)
  const [propertyMenu, setPropertyMenu] = useState<boolean>(false)
  const [zoneMenu, setZoneMenu] = useState<boolean>(false)

  // const searchProperties = async () => {
  //   const res = await getProperties()
  //   // eslint-disable-next-line no-console
  //   console.log(res.data)

  //   setResults(res.data.objects)
  // }
  const searchProperties = () => {
    const filterOperation: number | null =
      operationSelected.id !== 0 ? operationSelected.id : null
    const filterProperty: number | null =
      propertySelected.id !== 0 ? propertySelected.id : null
    const filterZone: number | null =
      zoneSelected.id !== 0 ? zoneSelected.id : null

    if (
      filterOperation !== null &&
      filterProperty === null &&
      filterZone === null
    ) {
      const filter = allProperties.filter(
        property => property.operation_id === operationSelected.id,
      )
      setResults(filter)
    }
    if (
      filterOperation === null &&
      filterProperty !== null &&
      filterZone === null
    ) {
      const filter = allProperties.filter(
        property => property.property_type_id === propertySelected.id,
      )
      setResults(filter)
    }
    if (
      filterOperation === null &&
      filterProperty === null &&
      filterZone !== null
    ) {
      const filter = allProperties.filter(
        property => property.zone_id === zoneSelected.id,
      )
      setResults(filter)
    }

    if (
      filterOperation !== null &&
      filterProperty !== null &&
      filterZone === null
    ) {
      const filter = allProperties.filter(
        property =>
          property.operation_id === operationSelected.id &&
          property.property_type_id === propertySelected.id,
      )
      setResults(filter)
    }

    if (
      filterOperation !== null &&
      filterProperty === null &&
      filterZone !== null
    ) {
      const filter = allProperties.filter(
        property =>
          property.operation_id === operationSelected.id &&
          property.zone_id === zoneSelected.id,
      )
      setResults(filter)
    }

    if (
      filterOperation === null &&
      filterProperty !== null &&
      filterZone !== null
    ) {
      const filter = allProperties.filter(
        property =>
          property.property_type_id === propertySelected.id &&
          property.zone_id === zoneSelected.id,
      )
      setResults(filter)
    }
  }

  console.log(results)

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

        <button onClick={searchProperties} className="action" type="button">
          APLICAR
        </button>
      </FilterContainer>
      <CardContainer>
        {results !== undefined &&
          results.map((property: PropertyExcelInterface) => (
            <PropertyCard
              photos={property.photos}
              id={property.id}
              operation_type={property.operation_type}
              description={property.description}
              time_periods={property.time_periods}
              meters_covered={property.meters_covered}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
            />
          ))}
      </CardContainer>
    </>
  )
}

export default Filters
