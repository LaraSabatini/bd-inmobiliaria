import React from "react"
import Navbar from "../components/NavBar"
import Title from "../components/Title"
import Footer from "../components/Footer"
import SellView from "../components/SellView"

const sell = () => {
  return (
    <>
      <Navbar />
      <Title text="Nuestras propiedades en venta" />
      <SellView />
      <Footer />
    </>
  )
}

export default sell
