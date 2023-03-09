import {
  UseFormRegister,
  UseFormReset,
  useFieldArray,
  useForm,
  Control,
} from "react-hook-form";
import {
  IFormCreateWorkout,
  Workouts,
  workout,
} from "../../context/AdminContext";
import { TrainingSection } from "./style";
import Input from "../Form/Input";
import { useEffect } from "react";

interface IFormTrainingPros {
  register: UseFormRegister<IFormCreateWorkout>;
  control: Control<IFormCreateWorkout, any>;
}
const empty: workout = { name: "", set: "" , repeat: ""  };

export const Training = ({ register, control }: IFormTrainingPros) => {
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray<IFormCreateWorkout>({
      control,
      name: "workout",
    });
  return (
    <TrainingSection>
      <button type="button" onClick={() => append({ ...empty })}>
        Adcionar exercício
      </button>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Input
            label="Nome"
            type="text"
            register={register(`workout.${index}.name`)}
          />
          <Input
            label="Repetições"
            type="text"
            register={register(`workout.${index}.repeat`)}
          />
          <Input
            label="Séries"
            type="text"
            register={register(`workout.${index}.set`)}
          />
        </div>
      ))}
    </TrainingSection>
  );
};
