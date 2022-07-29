import styled from "styled-components";

export const ThemeButton = styled.button`
  background-color: ${(props) => (props.graySchema ? "#868E96" : "#FF577F")};
  color: var(--white);
  height: 48px;
  border: 2px solid var(--black);
  margin-top: 16px;
  width: 324px;
  transition: 0.5;
  border-radius: 8px;
  :hover{
    border: 2px solid var(--gray1);
  }
`;

