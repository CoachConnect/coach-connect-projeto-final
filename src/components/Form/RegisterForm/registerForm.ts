import styled from "styled-components";

const StyledFormRegister = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;

    h3{
        font-size: 1.25rem;
        color: var(--colorPrimary);
    }

    .contentPlan{
        display: flex;
        flex-direction:column;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;     
    }

    @media(min-width: 700px){
        max-width: 40.625rem;
        margin: 0 auto;

        .contentPlan{
            flex-direction: row;
        }
        
    }

`


export default StyledFormRegister
