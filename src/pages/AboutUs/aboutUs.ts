import styled from "styled-components";

const StyledMainAboutUs = styled.main`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
   
    .images{
        display: flex;
    }

    img{
        object-fit: cover;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    @media(min-width: 700px){
        max-width: 80%;
        margin: 0 auto;
    }

`

export default StyledMainAboutUs