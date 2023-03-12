import styled from "styled-components";

const StyledHeader = styled.header`  
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    margin-bottom: 1.25rem;
    position: fixed;
    background-color:var(--colorGrey100);
    z-index: 1;

    .containerHeader{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1.375rem .5rem;
        align-items: center;    
        position: relative;
    }

    .menu.active{
        opacity: 1;
        display: flex;
        width: 100%;
        justify-content: center;
        background-color: var(--colorGrey150);
        z-index:1;
        padding: 1rem;
        position: fixed;
        gap: 1.5rem;
        top: 74px;
        right: 0;
      
    }
    .menu{
        opacity: 0;
        display: none;
    }


    .containerLoginForm{
        opacity: 0;
        display: none;
        position: relative;
    }

    .containerLoginForm.activeLogin{
        opacity: 1;
        display: flex;
        position: absolute;
        top: 3.375rem;
        background-color: var(--colorGrey150);
        border-radius: .25rem;
        padding: .5rem .5rem;
    }

    h1{
        color: var(--colorPrimary);
        font-size: 1.5rem;
    }

    
    @media(min-width: 700px){

        .containerHeader{
            max-width: 80%;
            margin: 0 auto;

        }
        .menu{
            display: flex;
            opacity: 1;
            gap: 1rem;
            align-items: inherit;
           
        }

        .menu.active{
            position: unset;
            background-color: transparent;
            width: unset;  
            padding: 0;   
        }
   
        .btnDropMenu{
            display: none;
        }

        
    }

    @media(min-width: 1100px){
        .containerLoginForm{
            display: flex;
            opacity: 1;
        }

        .containerLoginForm.activeLogin{
            position: unset;
            background-color: transparent;
            padding: 0 ;
        }

        .btnLogin{
            display: none;
        }
    }


`

export  {StyledHeader}