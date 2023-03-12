import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps } from "./RegisterAndLoginContext";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { IRegisterWorkout } from "../components/Form/workoutCreateForm";
import { IUpdateWorkout } from "../components/Form/WorkoutEditForm";
import { AxiosResponse } from "axios";

export const AdminContext = createContext({} as IAdminContext);

export interface IResponseWorkout {
  workout_type: string;
  muscle_group: string;
  workout: string;
  series: string
  repetitions: string
  charge: string
  id: number;
}


interface IAdminContext {
  createWorkout: (dataWorkout: IRegisterWorkout) => Promise<void>;
  getAllWorkouts: () => Promise<void>;
  logout: () => void;
  workoutList: IResponseWorkout[];
  trainings: IResponseWorkout[];
  workout: boolean;
  setTrainings: React.Dispatch<React.SetStateAction<IResponseWorkout[]>>;
  editWorkout: (data: IUpdateWorkout, workoutId: number | undefined) => Promise<AxiosResponse<IResponseWorkout, any> | undefined>
  removeWorkout: (workoutId: number) => Promise<void>;
  toggleModal: () => void;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  modalEdit: boolean;
  training: IResponseWorkout | undefined;
  setTraining: React.Dispatch<
    React.SetStateAction<IResponseWorkout | undefined>
  >;
}

export const AdminProvider = ({ children }: IDefaultProviderProps) => {
  const [trainings, setTrainings] = useState<IResponseWorkout[]>([]);
  const [workoutList, setWorkoutList] = useState<IResponseWorkout[]>([]);
  const [workout, setWorkout] = useState(true);
  const [modalEdit, setModalEdit] = useState(false);
  const [training, setTraining] = useState<IResponseWorkout | undefined>(
    undefined
  );
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalEdit((current) => !current);
  };

  const getAllWorkouts = async () => {
    try {
      const response = await api.get("/workouts");
          setWorkoutList(response.data);
          setWorkout(false);
          setTrainings(response.data);
      } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWorkouts();
  }, [workout]);

  const createWorkout = async (dataWorkout: IRegisterWorkout) => {
    try {
      await api.post("/workouts", dataWorkout);
      setWorkout(true);
      getAllWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  const editWorkout = async (data: IUpdateWorkout, workoutId: number | undefined) => {
    try {
      const response = await api.patch<IResponseWorkout>(`workouts/${workoutId}`, data);

      const newTrainings = trainings?.map((training) => {
        if(workoutId === training.id){
          return {...training, ...data}
        }
        else{
          return training
        }
      })
      setTrainings(newTrainings)
      setWorkoutList(newTrainings)

      return response

    }catch (error) {
      console.log(error);
    }
    finally{
      setModalEdit(false)
    }
  };

  const removeWorkout = async (workoutId: number) => {
    try {
      await api.delete(`workouts/${workoutId}`);
      setWorkout(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@token");
    navigate("/");
  };

  return (
    <AdminContext.Provider
      value={{
        workoutList,
        workout,
        trainings,
        createWorkout,
        getAllWorkouts,
        setTrainings,
        logout,
        editWorkout,
        removeWorkout,
        toggleModal,
        setModalEdit,
        modalEdit,
        training,
        setTraining,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
