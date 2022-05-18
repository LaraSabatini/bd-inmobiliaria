import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
  /* margin-top: 100px; */
`

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.25);
  border-radius: 15px;
  text-align: center;
  padding: 20px;
  font-family: "Poppins";

  font-size: 14px;
`

export { Container, Card }
