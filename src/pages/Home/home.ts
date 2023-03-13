import styled from "styled-components";

const StyledMainHomePage = styled.main`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    position: relative;
    top: 5.9375rem;

    h2{
        color: var(--colorPrimary);
        text-align: center;
        padding: 0 .25rem 1rem;
    }

    .btnRegister{
        width: 6.25rem;
        margin: 0 auto;
        display: flex;
        justify-content:center;

    }

    img{
        object-fit: contain;
    }

    @media(min-width: 700px){
        max-width: 80%;
        margin: 0 auto;
    }

    @media(min-width: 1090px){
        position: relative;
        top: 8.75rem;
    }

`
export default StyledMainHomePage