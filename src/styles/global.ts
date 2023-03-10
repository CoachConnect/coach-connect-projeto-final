import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    background-color: var(--color-green-2);

 
  }

button{
    cursor: pointer;
  }

   
:root {
        --color-green-1: #046B0F;
        --color-green-2: #EDF8E5;
       
    }

.container {
        max-width: 65rem;
        margin: 0 auto;
        width: 100%;
        padding: 1rem;
    }
`




