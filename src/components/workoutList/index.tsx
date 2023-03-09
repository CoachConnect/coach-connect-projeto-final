import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { WorkoutList } from "./style";

export const WorkoutsList = () => {
  const { workoutList, workout } = useContext(AdminContext);

  return (
    <>
      <WorkoutList>
        {workoutList.length > 0 ? (
          workoutList.map((workout) => (
            <li>
            <span>{workout.name}</span>
            <span>{workout?.repeat}</span>
          </li>
          ))
         
        ) : (
          <span className="orientation">Você ainda não possue treinos cadastrados!</span>
        )}
      </WorkoutList>
    </>
  );
};
