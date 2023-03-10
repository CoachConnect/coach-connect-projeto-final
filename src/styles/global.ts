import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

  :root{
    --colorPrimary:  #046B0F;
    --colorGrey200:  #BDBDBD;
    --colorGrey150: #E0E0E0;
    --colorGrey100:  #EDF8E5;    
    --colorWhite: #ffffff;
    --colorError: #e60000;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: var(--colorGrey100);
  }

  button{
    cursor: pointer;
  }
  .container {
        max-width: 65rem;
        margin: 0 auto;
        width: 100%;
        padding: 1rem;
    }
`






