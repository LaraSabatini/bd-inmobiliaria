/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react"
import { PropertyInterface } from "../interfaces/PropertyInterface"

export const FiltersContext = createContext({
  operationTypes: null,
  operationSelected: null,
  setOperationSelected: null,
  propertyTypes: null,
  zones: null,
  propertySelected: null,
  setPropertySelected: null,
  zoneSelected: null,
  setZoneSelected: null,
  // neighborhoods: null,
  // neighborhoodSelected: null,
  // setNeighborhoodSelected: null,
  results: null,
  setResults: null,
})

function FiltersContextProvider({ children }: any) {
  const operationTypes = [
    {
      operation_type: "Operacion",
      id: 0,
    },
    {
      operation_type: "Venta",
      id: 1,
    },
    { operation_type: "Alquiler Temporal", id: 2 },
    { operation_type: "Alquiler", id: 3 },
  ]

  const propertyTypes = [
    {
      property_type: "Tipo de propiedad",
      id: 0,
    },
    {
      property_type: "Departamento",
      id: 5,
    },
    { property_type: "Casa", id: 6 },
    { property_type: "Duplex", id: 7 },
    { property_type: "PH", id: 8 },
    { property_type: "Dormi", id: 999 },
  ]

  const zones = [
    {
      zone_type: "Zonas",
      id: 0,
    },
    {
      zone_type: "Capital Federal",
      id: 9,
    },
    {
      zone_type: "Cuba Fatima I",
      id: 10,
    },
    {
      zone_type: "Cuba Fatima II",
      id: 11,
    },
  ]

  // const neighborhoods = [
  //   {
  //     neighborhood_type: "Barrios",
  //     id: 101,
  //   },
  //   {
  //     neighborhood_type: "Recoleta",
  //     id: 11,
  //   },
  //   {
  //     neighborhood_type: "Coghlan",
  //     id: 12,
  //   },
  // ]

  const [operationSelected, setOperationSelected] = useState<{
    operation_type: string
    id: number
  }>(operationTypes[0])

  const [propertySelected, setPropertySelected] = useState<{
    property_type: string
    id: number
  }>(propertyTypes[0])

  const [zoneSelected, setZoneSelected] = useState<{
    zone_type: string
    id: number
  }>(zones[0])

  // const [neighborhoodSelected, setNeighborhoodSelected] = useState<{
  //   neighborhood_type: string
  //   id: number
  // }>(neighborhoods[0])

  const [results, setResults] = useState<PropertyInterface[]>([])

  return (
    <FiltersContext.Provider
      value={{
        operationTypes,
        operationSelected,
        setOperationSelected,
        propertyTypes,
        zones,
        propertySelected,
        setPropertySelected,
        zoneSelected,
        setZoneSelected,
        // neighborhoods,
        // setNeighborhoodSelected,
        // neighborhoodSelected,
        results,
        setResults,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContextProvider
