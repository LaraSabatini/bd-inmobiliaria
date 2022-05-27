import styled from "styled-components"

const SectionContainer = styled.div`
  width: 80%;
  font-family: "Poppins";
  margin: 0 auto;
  padding-top: 100px;
  gap: 10px;
`

const Slider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 10px;
  width: 700px;

  img {
    width: 700px;
    border-radius: 10px;
    height: 500px;
  }
`

const Address = styled.div`
  width: 97.3%;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.2);
  border-radius: 15px;
  padding: 15px 15px;
  text-transform: uppercase;
`

const Price = styled.div`
  width: 500px;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.2);
  border-radius: 15px;
  padding: 15px 15px 50px 15px;
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
  padding-left: 25px;

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

const PriceContainer = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  width: 300px;
  justify-content: space-between;
  margin-left: 25px;
  padding-bottom: 10px;
  padding-top: 10px;

  p {
    margin: 0;
  }
`

const Amenity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-left: 30px;
  border-bottom: 1px solid grey;
`

export {
  SectionContainer,
  Slider,
  Address,
  ArrowContainer,
  Arrow,
  Description,
  Title,
  PriceContainer,
  Amenity,
  Price,
}
