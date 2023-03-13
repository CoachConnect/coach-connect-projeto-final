
import { createContext, useContext, useEffect, useState } from "react";
import {
  IDefaultProviderProps,
  IUser,
  RegisterAndLoginContext,
  User,
} from "./RegisterAndLoginContext";
import api from "../services/api";

export interface IWorkout {
  workout_type: string;
  muscle_group: string;
  workout: string;
  series: string
  repetitions: string
  charge: string
  id: number;
}


interface IUserContext {
  editProfile: boolean;
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  updateProfile: (data: IEditProfile, userId: number) => Promise<void>;
  newUser: User | null;
  workouts:IWorkout[];
  viewContent:IWorkout | null;
  setViewContent:React.Dispatch<React.SetStateAction<IWorkout | null>>;
}

export interface IEditProfile {
  email: string;
  password: string;
  name: string;
  monthlyPlan?: string;
  photo?: string | undefined;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [editProfile, setEditProfile] = useState(false);
  const [upUser, setUpUser] = useState(false);
  const [newUser, setNewUser] = useState<User | null>(null);
  const { user } = useContext(RegisterAndLoginContext);
  const [workouts, setWorkouts] = useState<IWorkout[]>([])
  const [ viewContent, setViewContent] = useState<IWorkout | null >(null)

  const getUser = async (userId: number) => {
    try {
      const response = await api.get(`/users/${userId}`);
      setUpUser(false);
      setNewUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;
    getUser(user?.id);
  }, [upUser]);

  const updateProfile = async (data: IEditProfile, userId: number) => {
    try {
      await api.patch(`/users/${userId}`, data);
      setUpUser(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    async function loadWorkouts() {
      try {
        const token = localStorage.getItem('@token')
        if(token){
          const response = await api.get('/workouts',{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          setWorkouts(response.data)
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    loadWorkouts()
  },[])

  return (
    <UserContext.Provider
      value={{
        setEditProfile,
        editProfile,
        updateProfile,
        newUser,
        workouts,
        setViewContent,
        viewContent
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

