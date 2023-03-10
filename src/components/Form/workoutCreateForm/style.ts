import styled from "styled-components";

export const StyledForm = styled.form`

display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;

fieldset{
    display: flex;
    flex-direction: column;
    gap: 10px
    align-items: center;
}

label{
    font-size: 14px;

}

input{
    padding: 10px;
    border-radius: 8px
}



button{
    color: #ffff;
    border: 1px solid  #046B0F;
    border-radius: 8px;
    background-color: #046B0F;
    padding: 5px;
    font-size: 16px
    
}

`

export const TrainingSection = styled.div`

display: flex;
flex-direction: column;
gap: 10px;

button{
    background: var(--colorPrimary);
    padding: 5px 15px;
    border-radius: 8px;
    color: var(--colorWhite)
  
}

fieldset{
    display: flex;
    flex-direction: column;
    gap: 10px
}


span{
    font-size:16px;
    font-weight: 600
}

`