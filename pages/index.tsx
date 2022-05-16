import type { NextPage } from "next"
import Navbar from "../components/NavBar"
import Contact from "./contact"
import About from "./about"
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <About />
    </>
  )
}

export default Home
