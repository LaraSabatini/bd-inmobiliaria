import styled from "styled-components"

const AboutContainer = styled.div`
  img {
    width: 500px;
  }

  h2 {
    font-family: "Poppins";
    font-weight: 500;
  }

  display: flex;
  gap: 100px;
  margin: 0 auto;
  padding: 50px 20px;
  align-items: center;
  justify-content: center;
  background: rgba(4, 21, 120, 0.4);

  div {
    width: 40%;
    font-family: "Poppins";
    font-size: 15px;
  }

  @media (max-width: 410px) {
    flex-direction: column;
    gap: 10px;

    img {
      width: 350px;
    }

    div {
      width: 100%;
      font-size: 13px;
    }
  }
`

export default AboutContainer
