import styled from "styled-components";

const StyledFooter = styled.footer`
    border-top: 1.5px solid var(--colorGrey200);
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 3rem;
    position: absolute;
    bottom: 0;

    p{
        color: var(--colorPrimary);
        text-align: center;
    }

`

export default StyledFooter