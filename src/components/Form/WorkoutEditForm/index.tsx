import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import { useContext, useEffect } from "react";
import { AdminContext, IResponseWorkout } from "../../../context/AdminContext";
import { Training } from "../workoutCreateForm/training";
import { EditForm, ModalEditForm } from "./style";

export const WorkoutEditForm = () => {
  const { register, handleSubmit, reset, control } =
    useForm<IResponseWorkout>();
  const { editWorkout, removeWorkout, modalEdit, training, setModalEdit } =
    useContext(AdminContext);

  const submitEditForm: SubmitHandler<IResponseWorkout> = (data) => {
    if (!training) return;
    editWorkout(data, training.id);
    reset();
  
  };



  const remove = () => {
    if (!training) return;
    removeWorkout(training.id);
  };

  return (
    <>
      {modalEdit && (
        <ModalEditForm>
          <div>
            <div className="header-modal">
              <span>Editar treino</span>
              <button type="button" onClick={() => setModalEdit(false)}>
                X
              </button>
            </div>

            <EditForm onSubmit={handleSubmit(submitEditForm)}>
              <Input
                label="Tempo de treino"
                type="text"
                register={register("workout_time")}
              />
              <Training register={register} control={control} />
              <div className="button-div">
                <button type="submit">Editar</button>
                <button
                  className="button-modal"
                  type="button"
                  onClick={() =>{ remove() , setModalEdit(false) }}
                >
                  Remover
                </button>
              </div>
            </EditForm>
          </div>
        </ModalEditForm>
      )}
    </>
  );
};
