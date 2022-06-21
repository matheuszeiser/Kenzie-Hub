import styled from "styled-components";

export const Main = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px;
  width: 100%;

  hr {
    margin: 20px 0;
    width: 100vw;
    background-color: var(--gray3);
    height: .1px;
    border: none;
  }
`;

export const ThemeWelcome = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 900px;

  margin: 30px 0;

  span {
    color: var(--gray1);
  }
`;

export const ContainerList = styled.section`

  width: 900px;
  .divTech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
  }
  .btnAdd {
    background-color: var(--gray3);

    color: var(--white);
    font-size: 28px;

    height: 40px;
    width: 40px;
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  section{
    width: 900px;
    height: 500px;
    padding-top: 20px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    overflow: auto;
    

    background-color: var(--gray3);
  }
`;
