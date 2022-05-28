import React from "react"
import { Container, Form, Input, Map } from "./styles"

function Contact() {
  return (
    <Container id="contact">
      <div>
        <h2>Contactate con nosotros</h2>
        <Form>
          <Input>
            <p>Nombre y apellido</p>
            <input type="text" placeholder="Juan Perez" />
          </Input>
          <Input>
            <p>Mail</p>
            <input type="text" placeholder="juan@perez.com" />
          </Input>
          <Input>
            <p>Telefono</p>
            <input type="text" placeholder="+54 9 11 2358-4483" />
          </Input>
          <Input>
            <p>Mensaje</p>
            <textarea />
          </Input>
          <button className="submit" type="button">
            ENVIAR
          </button>
        </Form>
      </div>
      <Map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52656.31775465098!2d-59.009564175051416!3d-34.42625065963683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scuba%20cerca%20de%20Fatima%2C%20Pilar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1629725474077!5m2!1ses-419!2sar"
          allowFullScreen={false}
          // style={{ width: "600px", height: "450px", border: "0" }}
          loading="lazy"
          title="titulo"
        />
      </Map>
    </Container>
  )
}

export default Contact
