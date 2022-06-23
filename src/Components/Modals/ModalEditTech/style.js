import styled from "styled-components";

export const Container = styled.div`
  width: 369px;
  height: 342px;
`;
export const CloseButton = styled.button`
  color: var(--gray1);
  background-color: var(--gray2) ;
  border: none;
  font-size: 16px;
  font-weight: 700;
`;
export const FormUpdateTech = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 20px;
    height: 292px;

    background-color: var(--gray3);
    color: var(--white);

    input, select{
        width: 324px;
        background-color: var(--gray2);
        color: var(--white);
        border: 1px solid var(--white);
        height: 48px;
        border-radius: 8px;
        margin-bottom: 15px;
        padding: 0px 15px;
        font-size: 16px;
    }
    label {
    display: flex;
    justify-content: space-between;
    width: 324px;
    height: 18px;

    margin-bottom: 15px;
    padding-right: 5px;

    font-size: 14px;

  }

  label > span{
    color: var(--red);
  }
`