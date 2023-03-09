import { Training } from "./training";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminContext, IFormCreateWorkout } from "../../../context/AdminContext";
import { StyledForm } from "./style";
import { useContext } from "react";
import Input from "../Input";

export const WorkoutForm = () => {
  const submitWorkoutForm: SubmitHandler<IFormCreateWorkout> = (
    dataWorkout
  ) => {
    createWorkout(dataWorkout);
    reset();
  };
  const { createWorkout } = useContext(AdminContext);
  const { register, handleSubmit, reset, control } =
    useForm<IFormCreateWorkout>();

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submitWorkoutForm)}>
        <Input
          label="Tipo de treino"
          type="text"
          register={register("workout_type")}
        />
        <Input
          label="Grupo muscular"
          type="text"
          register={register("muscle_group")}
        />
        <Input
          label="Tempo de treino"
          type="text"
          register={register("workout_time")}
        />
        <Training register={register} control={control} />
        <button type="submit">Cadastrar treino</button>
      </StyledForm>
    </>
  );
};
