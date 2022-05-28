/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react"
import Link from "next/link"
import Logo from "../Assets/Logo"
import Arrow from "../Assets/Arrow"
import {
  Container,
  Links,
  Menu,
  Divider,
  MenuButton,
  MobileMenu,
  SubMenuMobile,
} from "./styles"

function Navbar() {
  const [menu, setMenu] = useState<boolean>(false)
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)
  return (
    <Container>
      <Logo />
      <MenuButton>
        <div onClick={() => setMobileMenu(!mobileMenu)} className="line" />
        <div onClick={() => setMobileMenu(!mobileMenu)} className="line" />
        <div onClick={() => setMobileMenu(!mobileMenu)} className="line" />
        {mobileMenu && (
          <MobileMenu>
            <Link href="/">Inicio</Link>
            <button type="button" onClick={() => setMenu(!menu)}>
              Propiedades
              <Arrow />
              {menu && (
                <SubMenuMobile>
                  <Link href="/rents">Alquiler</Link>

                  <Link href="/sell">Venta</Link>
                </SubMenuMobile>
              )}
            </button>
            <Link href="#about-us">Nosotros</Link>
            <Link href="#contact">Contacto</Link>
          </MobileMenu>
        )}
      </MenuButton>
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
        <Link href="#contact">Contacto</Link>
      </Links>
    </Container>
  )
}

export default Navbar
