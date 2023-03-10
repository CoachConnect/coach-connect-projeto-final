import styled from "styled-components";

export const WorkoutItem = styled.li`
  background: #ffff;
  border-radius: 8px;
  width: 80%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    background: var( --colorPrimary);
    color: #ffff;
    border-radius: 50%;
    padding: 10px;
    width: 30px;
    height: 30px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span,
  button {
    color: var( --colorPrimary);
  }

  button {
    background: none;
    font-size: 20px;
  }
`;
