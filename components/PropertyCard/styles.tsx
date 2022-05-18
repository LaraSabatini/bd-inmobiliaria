import styled from "styled-components"

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(4, 21, 120, 0.2);
  border-radius: 20px;
  width: 300px;
  height: 400px;
  /* justify-content: space-between; */
  font-family: "Poppins";
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  .photos {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 144px;

    p {
      margin: 0;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      color: #929292;
    }
  }

  p {
    margin: 0;
  }

  .content {
    padding: 10px;
  }

  .amount {
    display: flex;
    gap: 10px;
    padding-top: 10px;
  }

  .tags {
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    padding: 10px 0;
  }

  .surface {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 12px;
  }

  .operationType {
    background: #041578;
    border-radius: 10px;

    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    padding: 5px 15px;
    line-height: 20px;
    width: fit-content;
    /* identical to box height */
    color: #ffffff;
  }

  .description {
    font-size: 13px;
    padding-top: 10px;
  }
`

// eslint-disable-next-line import/prefer-default-export
export { Card }
