import { SubmitHandler, useForm } from "react-hook-form";
import { AdminContext, IResponseWorkout } from "../../../context/AdminContext";
import { StyledForm } from "./style";
import { useContext } from "react";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterNewWorkout } from "../../../utils/schemas";


export type IRegisterWorkout = Omit<IResponseWorkout, "id">

export const WorkoutForm = () => {
 
  const { createWorkout } = useContext(AdminContext);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IRegisterWorkout>({
    resolver: yupResolver(schemaRegisterNewWorkout)
  });
  const submitWorkoutForm: SubmitHandler<IRegisterWorkout> = (
    dataWorkout
  ) => {
    createWorkout(dataWorkout);
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submitWorkoutForm)}>
        <Input
          label="Tipo de treino"
          type="text"
          register={register("workout_type")}
          error={errors.workout_type}
        />
        <Input
          label="Grupo muscular"
          type="text"
          register={register("muscle_group")}
          error={errors.muscle_group}

        />
        <Input
          label="Nome do treino"
          type="text"
          register={register("workout")}
          error={errors.workout}
        />
         <Input
          label="Repetições"
          type="text"
          register={register("repetitions")}
          error={errors.repetitions}
        />
        <Input
          label="Séries"
          type="text"
          register={register("series")}
          error={errors.series}
        />
        <Input
          label="Carga"
          type="text"
          register={register("charge")}
          error={errors.charge}
        />

        <button type="submit">Cadastrar treino</button>
      </StyledForm>
    </>
  );
};
