import styled from "styled-components";

const StyledMainAboutUs = styled.main`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    gap : 1.875rem;
    position: relative;
    top: 5.9375rem;
   
    .images{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        figure{
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            gap: .5rem;
            text-align: center;
            font-size: .75rem;
            color: var(--colorPrimary);
            font-weight: 600;
        }
    }

    .sectionSlogan{
        p{
            color: var(--colorPrimary);
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
        }
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

    @media(min-width: 890px){
        .images{
            flex-direction: row;
        }
    }

    @media(min-width: 1090px){
        position: relative;
        top: 8.75rem;
    }

`

export default StyledMainAboutUs