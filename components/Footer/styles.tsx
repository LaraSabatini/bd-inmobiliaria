import styled from "styled-components"

const Container = styled.div`
  background: #041578;
  width: 100%;
  height: 300px;
  padding: 20px;
  margin-left: -10px;
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  gap: 100px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 100px;
    margin-top: 50px;
  }

  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
    line-height: 38px;
    /* identical to box height */
    color: #ffffff;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 10px;

    color: white;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
  }

  .logo {
    margin-left: 150px;
    margin-top: 50px;
  }

  @media (max-width: 410px) {
    flex-direction: column;
    gap: 10px;
    height: fit-content;
    align-items: center;

    .logo {
      margin-left: 0px;
      margin-top: 50px;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin-left: -100px;
      margin-top: 50px;
    }
  }
`

export default Container
