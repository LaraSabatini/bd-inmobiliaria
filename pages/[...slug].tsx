import React from "react"
import { useRouter } from "next/router"
import { PropertyExcelInterface } from "../interfaces/PropertyInterface"
import properties from "../properties.json"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import PropertyView from "../components/PropertyView"

function DynamicPage() {
  const router = useRouter()

  const cleanRouter = router.asPath.slice(1).split("/")
  const idOfProperty = parseInt(cleanRouter[1], 10)

  const property = properties.filter(
    (p: PropertyExcelInterface) => p.id === idOfProperty,
  )

  return (
    <>
      <Navbar />
      <PropertyView data={property[0]} />
      <Footer />
    </>
  )
}

export default DynamicPage
