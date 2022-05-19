import styled from "styled-components"

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 39.06px;
    line-height: 48px;
    /* identical to box height */
    font-size: 25px;
    color: #0d0e14;
  }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Input = styled.div`
  font-family: "Poppins";
  font-size: 14px;
  p {
    margin: 0;
    padding-left: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #0d0e14;
  }

  input {
    padding: 5px;
    width: 200px;
  }

  textarea {
    width: 300px;
    height: 100px;
  }
`

const Map = styled.div``

export { Container, Form, Input, Map }
