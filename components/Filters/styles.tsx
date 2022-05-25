import styled from "styled-components"

const FilterContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .action {
    background: #041578;
    box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.2);
    border-radius: 10px;
    color: #fff;
    padding: 10px 25px;
  }

  button {
    border: none;
    font-family: "Poppins";
    cursor: pointer;
    background: none;
    outline: none;
  }
`

const Filter = styled.div`
  position: relative;
  cursor: pointer;
  font-family: "Poppins";
  display: flex;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  gap: 10px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.2);
`

const Menu = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.15);
  border-radius: 0px 0px 5px 5px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  top: 50px;
  left: 0;

  p {
    margin: 0;
  }
`

const CardContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  padding-top: 100px;
  width: 90%;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
  overflow: auto;
`

export { FilterContainer, Filter, Menu, CardContainer }
