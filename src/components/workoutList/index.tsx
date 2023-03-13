import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { StyledWorkoutList } from "./style";
import { WorkoutCard } from "./workoutCard";



export const WorkoutsList = () => {
  const { workoutList, workout } = useContext(AdminContext);

  return (
    <>
      <StyledWorkoutList>
        {workoutList.length > 0 ? (
          <WorkoutCard  />
        ) : (
          <span className="orientation">
            Você ainda não possue treinos cadastrados!
          </span>
        )}
      </StyledWorkoutList>
    </>
  );
};
