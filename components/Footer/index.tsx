import React from "react"
import MailWhite from "../Assets/MailWhite"
import PhoneWhite from "../Assets/PhoneWhite"
import MapdotWhite from "../Assets/MapdotWhite"
import Instagram from "../Assets/Instagram"
import Facebook from "../Assets/Facebook"
import Linkedin from "../Assets/Linkedin"
import LogoWhite from "../Assets/LogoWhite"
import Container from "./styles"

function Footer() {
  return (
    <Container>
      <div className="column">
        <h4>Contacto</h4>
        <div className="content">
          <MailWhite />
          ejemplo@gmail.com
        </div>
        <div className="content">
          <PhoneWhite />
          +54 011 2485-9483
        </div>
        <div className="content">
          <MapdotWhite />
          Av. Siempre viva 332
        </div>
      </div>
      <div className="column">
        <h4>Redes sociales</h4>
        <div className="content">
          <Instagram />
          <Facebook />
          <Linkedin />
        </div>
      </div>
      <div className="logo">
        <LogoWhite />
      </div>
    </Container>
  )
}

export default Footer
