import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  
 
  }
  body{
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;

    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export default GlobalStyles;
