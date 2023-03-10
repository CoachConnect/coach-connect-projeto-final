import styled from "styled-components"

const StyledFieldsetRadio = styled.fieldset`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: .375rem;
  

    label{
        background-color: var(--colorGrey100);
        height: 100%;
        border-radius: .25rem;
        border: 1px solid var(--colorPrimary);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 .75rem;
        position: relative;
        width: 262px;
        height: 153px
    }

    input{
        all: unset;      
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left : 0;
        background-color: var(--colorGrey100);
    }

    input::after{
        content: "";
        clear:both;
    }

    input:hover{
        background-color: rgba(77, 169, 87, 0.69);
    }

    input:hover + span{
        color:var(--colorGrey100);
        background-color:transparent;
    }

    span{
        color: var(--colorPrimary);
        line-height: 1.875rem;
        width: 7.8125rem;
        z-index: 1;
        background-color: transparent;
    }

    label, input:checked{
        background-color: var(--colorPrimary);

    }

    label, input:checked + span{
        color: var(--colorGrey100);
    }

`


export default StyledFieldsetRadio