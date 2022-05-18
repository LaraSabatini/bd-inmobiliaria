import React from "react"
import Title from "../Title"
import { Container, Card } from "./styles"

function Testimonials() {
  const testimonial = [
    {
      id: 1,
      author: "-Juan Perez",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra vel velit facilisis ornare. Duis ipsum nunc, ultrices nec eleifend a, gravida eget tellus.",
    },
    {
      id: 2,
      author: "-Juan Perez",
      description:
        "LorLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra vel velit facilisis ornare. Duis ipsum nunc, ultrices nec eleifend a, gravida eget tellus.em",
    },
    {
      id: 3,
      author: "-Juan Perez",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra vel velit facilisis ornare. Duis ipsum nunc, ultrices nec eleifend a, gravida eget tellus.",
    },
  ]

  return (
    <>
      <Title text="Testimonios" />
      <Container>
        {testimonial.map(item => (
          <Card key={item.id}>
            <p className="description">{item.description}</p>
            <p className="author">{item.author}</p>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Testimonials
