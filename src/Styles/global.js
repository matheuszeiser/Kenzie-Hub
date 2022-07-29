import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }

    :root{
        --black: #121214;
        --pink: #FF577F; 
        --gray1: #868E96;
        --gray2: #343B41;
        --gray3: #212529;
        --white: #F8F9FA;
        --red: #992c20;
    }
    body{
        background-color: var(--black);
        color: var(--white);
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
