import { Link } from "react-router-dom";
import styled from "styled-components";


 const StyledButtonLink = styled(Link)`
    padding: 0 .5rem;
    border-radius: .25rem;
    background-color:var(--colorPrimary);
    color: var(--colorGrey100);
    height: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: .875rem;
`

const StyledButton = styled.button`
    padding: 0 .5rem;
    border-radius: .25rem;
    background-color:var(--colorPrimary);
    color: var(--colorGrey100);
    height: 2rem;
    display: flex;
    align-items: center;
    text-align:center;
    cursor: pointer;
    font-size: .875rem;
`
export  {StyledButtonLink, StyledButton}