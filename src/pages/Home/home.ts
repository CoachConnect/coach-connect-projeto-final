import styled from "styled-components";

const StyledMainHomePage = styled.main`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;

    h2{
        color: var(--colorPrimary);
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

`
export default StyledMainHomePage