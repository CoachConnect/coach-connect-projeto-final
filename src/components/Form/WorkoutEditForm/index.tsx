import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import { useContext, useEffect } from "react";
import { AdminContext, IResponseWorkout } from "../../../context/AdminContext";
import { EditForm, ModalEditForm } from "./style";

export type IUpdateWorkout = Omit<IResponseWorkout, "workout_type" | "muscle_group" | "workout" | "id">

export const WorkoutEditForm = () => {
  const { register, handleSubmit, reset } =
    useForm<IUpdateWorkout>();
  const { editWorkout, removeWorkout, modalEdit, training, setModalEdit } =
    useContext(AdminContext);

  const submitEditForm: SubmitHandler<IUpdateWorkout> = (data) => {
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
                label="Repetições"
                type="text"
                register={register("repetitions")}
              />
              <Input
                label="Séries"
                type="text"
                register={register("series")}
              />
              <Input
                label="Carga"
                type="text"
                register={register("charge")}
              />
             
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
