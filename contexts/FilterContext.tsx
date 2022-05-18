import { createContext, useState } from "react"

export const FiltersContext = createContext({
  operationTypes: null,
  operationMenu: null,
  setOperationMenu: null,
  operationSelected: null,
  setOperationSelected: null,
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
    { operation_type: "Alquiler temporal", id: 2 },
    { operation_type: "Alquiler", id: 3 },
  ]

  const [operationMenu, setOperationMenu] = useState<boolean>(false)
  const [operationSelected, setOperationSelected] = useState<{
    operation_type: string
    id: number
  }>(operationTypes[0])

  return (
    <FiltersContext.Provider
      value={{
        operationTypes,
        operationMenu,
        setOperationMenu,
        operationSelected,
        setOperationSelected,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContextProvider
