import styled from "styled-components"

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  font-family: "Poppins";
  font-size: 15px;

  a {
    color: black;
    text-decoration: none;
  }
`

const Links = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;

  button {
    border: none;
    outline: none;
    background: none;
    font-family: "Poppins";
    font-size: 15px;
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    color: black;
  }
`

const Menu = styled.div`
  position: absolute;
  z-index: 10;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100px;
  top: 60px;
  border-radius: 0px 0px 5px 5px;
  padding: 10px 0 10px 10px;
  align-items: flex-start;

  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.15);
`

const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #00000064;
  margin: 10px 0;
`

export { Container, Links, Menu, Divider }
