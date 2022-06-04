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

  @media (max-width: 410px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  @media (max-width: 410px) {
    /* visibility: hidden; */
    display: none;
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

const MenuButton = styled.div`
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border: none;
    background: none;
  }
  .line {
    width: 20px;
    height: 2px;
    background-color: #00000064;
  }
  border: none;
  background: none;

  display: none;

  @media (max-width: 410px) {
    display: flex;
    position: relative;
    z-index: 10;
  }
`

const MobileMenu = styled.div`
  position: absolute;
  z-index: 100;
  top: 50px;
  gap: 10px;
  padding: 10px;
  right: 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 150px;
  background-color: white;
  border-radius: 0 0 5px 5px;
  text-align: right;

  button {
    border: none;
    background: none;
  }
`

const SubMenuMobile = styled.div`
  position: absolute;
  top: 58px;
  border-radius: 0 0 5px 5px;
  background-color: white;
  width: 100px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
`

export {
  Container,
  Links,
  Menu,
  Divider,
  MenuButton,
  MobileMenu,
  SubMenuMobile,
}
