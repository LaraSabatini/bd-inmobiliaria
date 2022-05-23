import type { NextPage } from "next"
import Navbar from "../components/NavBar"
import SectionTitle from "../components/Title"
import Slideshow from "../components/Slideshow"
import Search from "../components/Search"
import Contact from "./contact"
import About from "./about"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <SectionTitle text="Nuestros productos" />
      <Search />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
