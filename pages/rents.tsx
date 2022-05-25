import React from "react"
import Navbar from "../components/NavBar"
import Title from "../components/Title"
import Footer from "../components/Footer"
import RentView from "../components/RentView"

const rents = () => {
  return (
    <>
      <Navbar />
      <Title text="Nuestras propiedades en alquiler" />
      <RentView />
      <Footer />
    </>
  )
}

export default rents
