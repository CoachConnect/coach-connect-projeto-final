import styled from "styled-components";

const StyledImage = styled.img`
    object-fit: contain;
    max-height: 350px;
    max-width: 850px;
`

const StyledDiv = styled.div`
   
    img{
        position: relative;
        object-fit: contain;
        max-height: 350px;
        max-width: 850px;     
    }

    p{
        position: absolute;
        width: 180px;
        top: calc(100% / 4.5);
        left: calc(100% / 3.7);
        color: var(--colorWhite);
        font-weight: bold;
        letter-spacing: 3px;
    }

`

export { StyledDiv, StyledImage }

