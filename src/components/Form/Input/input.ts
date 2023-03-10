import styled from "styled-components";

const StyledFieldset = styled.fieldset`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: .375rem;
    height: 72px; 

    label{
        color: var(--colorPrimary);
        font-size: .75rem;
        
    }
    input{
        width: 95%;
        border-radius: .25rem;
        height: 1.875rem;
        padding: 0 .375rem;
    }

    input:focus{
        outline: 2px solid var(--colorPrimary);
        border-radius: .25rem;
    }

    p{
        font-size: .75rem;
        color: var(--colorError);
    }

`

export default StyledFieldset