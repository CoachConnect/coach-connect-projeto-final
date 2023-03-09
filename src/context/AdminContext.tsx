import { createContext, useState } from "react";
import { IDefaultProviderProps } from "./RegisterAndLoginContext";
import api from "../services/api";
import {  useNavigate } from "react-router-dom";

export const AdminContext = createContext({} as IAdminContext);

export interface IFormCreateWorkout {
  workout_type: string;
  muscle_group: string;
  workout_time: string;
  workout: Workouts;
  id?: number
}

export type Workouts =  workout[];

export interface workout {
  name: string;
  repeat: string;
  set: string;
}

interface IAdminContext {
  createWorkout: (dataWorkout: IFormCreateWorkout) => Promise<void>;
  getAllWorkouts: () => Promise<void>;
  logout: () => void;
  workoutList: Workouts;
  training: workout | null;
  workout: IFormCreateWorkout | null
}

export const AdminProvider = ({ children }: IDefaultProviderProps) => {
  const [training, setTraining] = useState<workout | null>(null);
  const [workoutList, setWorkoutList] = useState<Workouts>([]);
  const [workout, setWorkout] = useState<IFormCreateWorkout | null >(null)
  const navigate = useNavigate() 

  const createWorkout = async (dataWorkout: IFormCreateWorkout) => {
    try {
      const response = await api.post("/workouts", dataWorkout);
      setWorkoutList(response.data)
      setWorkout(response.data)
      
     
    } catch (error) {
      console.log(error)
    }
  };

  console.log(workoutList)

  const getAllWorkouts = async () => {
    try {
      const response = await api.get("/workouts");
      setWorkoutList(response.data);
    } catch (error) {}
  };

  

  const logout = () => {
    localStorage.removeItem("@token");
    navigate("/")
  };

  return (
    <AdminContext.Provider
      value={{ workoutList, workout, training, createWorkout, getAllWorkouts, logout,  }}
    >
      {children}
    </AdminContext.Provider>
  );
};
