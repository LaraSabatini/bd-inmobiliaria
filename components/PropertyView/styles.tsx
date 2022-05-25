import styled from "styled-components"

const SectionContainer = styled.div`
  width: 80%;
  font-family: "Poppins";
`

const Slider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 10px;

  img {
    width: 900px;
    border-radius: 10px;
    height: 500px;
  }
`

const Address = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.2);
  border-radius: 15px;
  padding: 10px 20px;
  text-transform: uppercase;
`

const ArrowContainer = styled.div`
  position: absolute;
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 50%;
`

const Arrow = styled.div`
  background: #ffffff4e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background: #ffffff83;
  }
`

const Description = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.2);
  border-radius: 10px;
  width: 40%;
  height: 500px;

  p {
    margin: 0;
    padding: 0px 25px;
  }
`

const Title = styled.h5`
  padding-left: 25px;

  display: flex;
  width: 50%;
  justify-content: space-between;
`

export {
  SectionContainer,
  Slider,
  Address,
  ArrowContainer,
  Arrow,
  Description,
  Title,
}
