import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 90%;
  align-items: center;
  justify-content: center;

  button {
    color: #ffff;
    border: 1px solid #046b0f;
    border-radius: 8px;
    background-color: #046b0f;
    padding: 5px;
    font-size: 16px;
    width: 50%;
  }

  @media (min-width: 800px) {
    button {
      width: ;
    }
  }
`;
