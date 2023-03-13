import styled from "styled-components";

export const WorkoutItem = styled.li`
  background: #ffff;
  border-radius: 8px;
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;


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

  .contentWorkout{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 3.7rem;
    max-width: 9.375rem;
    
  }

  .quantities{
    font-weight: bold;
    
  }
  
  span,
  button {
    color: var( --colorPrimary);
  }

  button {
    background: none;
    font-size: 20px;
    margin: 5px;
  }
`;
