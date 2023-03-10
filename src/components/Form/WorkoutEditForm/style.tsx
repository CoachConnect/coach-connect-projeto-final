import styled from "styled-components";

export const ModalEditForm = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;
  top: 0;

div {
    width: 80%;
    max-width: 500px;
    background: var(--colorGrey100);
    
  
    
    .header-modal{

      display: flex;
      justify-content: space-between;
      background: var( --colorPrimary);
      width: 100%;
      padding: 10px;

      span, button{
        color: var(--colorWhite)
      }

      button{
        background: none
      }
    }
  };


`;

export const EditForm = styled.form`

padding: 10px;
display: flex;
flex-direction: column;

.button-div{
  display: flex;
  justify-content: space-between;
  padding: 10px;

  button{
    background: var(--colorPrimary);
    padding: 5px 15px;
    border-radius: 8px;
    color: var(--colorWhite)
  }
}

`