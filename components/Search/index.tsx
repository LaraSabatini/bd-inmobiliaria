import React from "react"
import FiltersContextProvider from "../../contexts/FilterContext"
import Filters from "../Filters"

function Search() {
  return (
    <FiltersContextProvider>
      <Filters />
    </FiltersContextProvider>
  )
}

export default Search
