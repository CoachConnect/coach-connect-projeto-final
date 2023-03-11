import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { WorkoutList } from "./style";
import { WorkoutCard }  from "./workoutCard";

export const WorkoutsList = () => {
  const { workoutList, workout } = useContext(AdminContext);

  return (
    <>
      <WorkoutList>
        {workoutList.length > 0 ? (
          <WorkoutCard  />
        ) : (
          <span className="orientation">
            Você ainda não possue treinos cadastrados!
          </span>
        )}
      </WorkoutList>
    </>
  );
};
