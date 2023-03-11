import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps } from "./RegisterAndLoginContext";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext({} as IAdminContext);

export interface IResponseWorkout {
  workout_type: string;
  muscle_group: string;
  workout_time: string;
  workout: Workouts;
  id: number;
}

export type Workouts = workout[];

export interface workout {
  name: string;
  repeat: string;
  set: string;
}

interface IAdminContext {
  createWorkout: (dataWorkout: IResponseWorkout) => Promise<void>;
  getAllWorkouts: () => Promise<void>;
  logout: () => void;
  workoutList: IResponseWorkout[];
  trainings: IResponseWorkout[] | null;
  workout: boolean;
  setTrainings: React.Dispatch<React.SetStateAction<IResponseWorkout[] | null>>;
  editWorkout: (data: IResponseWorkout, workoutId: number) => Promise<void>;
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
  const [trainings, setTrainings] = useState<IResponseWorkout[] | null>(null);
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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWorkouts();
  }, [workout]);

  const createWorkout = async (dataWorkout: IResponseWorkout) => {
    try {
      await api.post("/workouts", dataWorkout);
      setWorkout(true);
      getAllWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  const editWorkout = async (data: IResponseWorkout, workoutId: number | undefined) => {
    try {
      await api.patch(`workouts/${workoutId}`, data);
    } catch (error) {
      console.log(error);
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
