import styled from "styled-components";

export const ModalEditProfile = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;
  top: 0;
  left: 0;

div {
    width: 90%;
    max-width: 500px;
    background: var(--colorGrey100);
    padding: 5px;
  }
`;

export const HeaderModal = styled.div`
 
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;

  span {
    color: var(--colorPrimary);
    font-size: 18px;
    font-weight: 600;
  }
`;
