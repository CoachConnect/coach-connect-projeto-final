import { useContext, useEffect } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { StyledWorkoutItem } from "./style";

export const WorkoutCard = () => {
  const { workoutList, setModalEdit , setTraining } = useContext(AdminContext);
  return (
    <>
      {workoutList.map((workout, index) => (
        <StyledWorkoutItem key={index}>
          <h3>{workout.workout_type}</h3>
            <div className="contentWorkout">
              <span>{workout.muscle_group} </span>
              <span className="quantities">{workout.series} X {workout.repetitions} - {workout.charge}kg</span>
            </div>
          <button onClick={()=> {setModalEdit(true), setTraining(workout)}}>+</button>
        </StyledWorkoutItem>
      ))}
    </>
  );
};
