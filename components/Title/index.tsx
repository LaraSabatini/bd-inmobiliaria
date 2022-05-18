import React from "react"
import Title from "./styles"

interface PropsInterface {
  text: string
}

function SectionTitle({ text }: PropsInterface) {
  return <Title>{text}</Title>
}

export default SectionTitle
