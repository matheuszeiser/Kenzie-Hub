import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px;

  background-color: var(--black);

  padding: 20px;
  border-radius: 8px;

  width: 95%;
  height: 50px;

  .divTechBtn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  div > span {
    margin-right: 30px;
    color: var(--gray1);
  }
  .btnTrash {
    color: var(--white);
    font-size: 20px;

    background-color: var(--black);

    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
