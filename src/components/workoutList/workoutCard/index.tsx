import { useContext, useEffect } from "react";
import { AdminContext, IResponseWorkout } from "../../../context/AdminContext";
import { WorkoutItem } from "./style";

export const WorkoutCard = () => {
  const { workoutList, setModalEdit , setTraining } = useContext(AdminContext);
  return (
    <>
      {workoutList.map((workout, index) => (
        <WorkoutItem key={index}>
          <h3>{workout.workout_type}</h3>
          <span>{workout.muscle_group}</span>
          <button onClick={()=> {setModalEdit(true), setTraining(workout)}}>+</button>
        </WorkoutItem>
      ))}
    </>
  );
};
