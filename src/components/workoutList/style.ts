import styled from "styled-components";

export const WorkoutList = styled.ul`
 min-height: 150px;
  border: 1px solid #046b0f;
  border-radius:8px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  overflow-y: scroll;
  padding: 10px;

  .orientation {
    display: flex;
    justify-content: center;
    padding: 10px;
    font-weight: 600;
    color: #046b0f;
  }
`;
