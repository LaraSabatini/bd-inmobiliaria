import React, { useContext } from "react"
import { FiltersContext } from "../../contexts/FilterContext"
import HouseIcon from "../Assets/HouseIcon"
import Building from "../Assets/Building"
import Mapdot from "../Assets/Mapdot"
import Arrow from "../Assets/Arrow"
import { FilterContainer, Filter, Menu } from "./styles"

function Filters() {
  const {
    operationTypes,
    operationMenu,
    setOperationMenu,
    operationSelected,
    setOperationSelected,
  } = useContext(FiltersContext)

  return (
    <FilterContainer>
      <Filter onClick={() => setOperationMenu(!operationMenu)}>
        <div>
          <HouseIcon />
          {operationSelected.operation_type}
        </div>
        <Arrow />
        {operationMenu && (
          <Menu>
            {operationTypes.map(operation => (
              <button
                type="button"
                onClick={() => setOperationSelected(operation)}
              >
                {operation.operation_type}
              </button>
            ))}
          </Menu>
        )}
      </Filter>
      <Filter>
        <div>
          <Building />
          Tipo de propiedad
        </div>
        <Arrow />
      </Filter>
      <Filter>
        <div>
          <Mapdot />
          Zona
        </div>
        <Arrow />
      </Filter>
      <Filter>
        <div>
          <Mapdot />
          Barrio
        </div>
        <Arrow />
      </Filter>
      <button className="action" type="button">
        APLICAR
      </button>
    </FilterContainer>
  )
}

export default Filters
