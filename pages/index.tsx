import type { NextPage } from "next"
import Navbar from "../components/NavBar"
// import Slideshow from "../components/Slideshow"
import Search from "../components/Search"
import Contact from "./contact"
import About from "./about"
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* <Slideshow /> */}
      <Search />
      <Contact />
      <About />
    </>
  )
}

export default Home
