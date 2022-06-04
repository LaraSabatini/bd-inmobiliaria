import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

function Slideshow() {
  return (
    <Carousel autoPlay infiniteLoop showArrows>
      <div>
        <img
          alt="hola"
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <p className="legend">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos.
        </p>
      </div>
      <div>
        <img
          alt="alo"
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <p className="legend">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos.
        </p>
      </div>
      <div>
        <img
          alt="hello"
          src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <p className="legend">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos.
        </p>
      </div>
    </Carousel>
  )
}

export default Slideshow
