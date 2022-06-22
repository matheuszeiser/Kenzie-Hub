import styled, { keyframes } from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  h2 {
    margin-bottom: 30px;
  }

  input {
    width: 324px;
  
    background-color: var(--gray2);
    color: var(--white);
    
    padding: 10.5px 2.69px 10.5px 16.24px;
    border: 1px solid var(--white);
    margin-bottom: 5px;
    border-radius: 8px;
  }
  
  span {
    margin: 20px 0;
  }
  label{
    width: 324px;
    text-align: left;
    margin-bottom: 3px;
  }
  button{
    margin-top: 20px;
  }
  input{
    margin-bottom: 10px;
  }
  label > span{
    color: red;
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

  height: 502px;
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
  
  h1{
    height: 40px;
    margin: 120px 0 0;
    color: var(--pink);
  }
  
  animation: ${appear} 2s;
`;
