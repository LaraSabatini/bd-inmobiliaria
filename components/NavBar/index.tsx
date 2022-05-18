import React, { useState } from "react"
import Link from "next/link"
import Logo from "../Assets/Logo"
import Arrow from "../Assets/Arrow"
import { Container, Links, Menu, Divider } from "./styles"

function Navbar() {
  const [menu, setMenu] = useState<boolean>(false)
  return (
    <Container>
      <Logo />
      <Links>
        <Link href="/">Inicio</Link>
        <button type="button" onClick={() => setMenu(!menu)}>
          Propiedades
          <Arrow />
          {menu && (
            <Menu>
              <Link href="/rents">Alquiler</Link>
              <Divider />
              <Link href="/sell">Venta</Link>
            </Menu>
          )}
        </button>
        <Link href="#about-us">Nosotros</Link>
        <Link href="/contact">Contacto</Link>
      </Links>
    </Container>
  )
}

export default Navbar
