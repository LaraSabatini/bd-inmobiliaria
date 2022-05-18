/* eslint-disable no-console */
import React, { useState, useEffect } from "react"
import { SliderContainer, Slide } from "./styles"

function Slideshow() {
  const [actualImage, setActualImage] = useState<{ id: number; url: string }>({
    id: 0,
    url: "",
  })

  const images = [
    {
      id: 1,
      url:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 3,
      url:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ]

  // const rotateCarousel = () => {
  //   // setTimeout(() => {
  //   // setActualImage(images)
  //   for (let i = 0; i < images.length; i = +1) {
  //     setActualImage(images[i])
  //   }
  //   // }, 1000)
  // }

  // console.log("imag", actualImage)

  // useEffect(() => {
  //   rotateCarousel()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <SliderContainer>
      <Slide>
        <img alt={`${images[0].id}`} src={images[0].url} />
      </Slide>
    </SliderContainer>
  )
}

export default Slideshow
