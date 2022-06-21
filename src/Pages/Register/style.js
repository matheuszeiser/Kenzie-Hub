import styled, { keyframes } from "styled-components";

export const ThemeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width};
  margin: ${props => props.margin};

  h1 {
    color: var(--pink);
  }

  button{
    margin: auto;
    width: 68px;
    height: 40px;
    color: var(--white);
    background-color: var(--gray3);
    margin-right: 0;
    border: none;
  }
`;
export const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    margin-bottom: 30px;
  }

  input,
  select {
    width: 324px;

    background-color: var(--gray2);
    color: var(--white);
    
    padding: 10.5px 2.69px 10.5px 16.24px;
    margin-bottom: 5px;
    border-radius: 8px;

    &::placeholder{
      color: var(--gray1);
    }
  }

  span {
    margin: 20px 0;
    color: var(--gray1);
  }
  label {
    width: 324px;
    text-align: left;
    margin-bottom: 3px;
  }
  button {
    margin-top: 20px;
  }
  input {
    margin-bottom: 10px;
  }
  label + input{
    margin-bottom: 20px;
  }

  
`;

const appear = keyframes`
    from{
        opacity: 0;
        transform: translateY(-100px);
    }
    to{
        transform: translateY(0px);
        opacity: 1;
    }
    `;
export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 840px;
  width: 369px;

  background-color: var(--gray3);

  margin-top: 30px;
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  
  animation: ${appear} 2s;
`;
