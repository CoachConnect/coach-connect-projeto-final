
import { createContext, useContext, useEffect, useState } from "react";
import {
  IDefaultProviderProps,
  IUser,
  RegisterAndLoginContext,
  User,
} from "./RegisterAndLoginContext";
import api from "../services/api";

interface IUserContext {
  editProfile: boolean;
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  updateProfile: (data: IEditProfile, userId: number) => Promise<void>;
  newUser: User | null;
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

  return (
    <UserContext.Provider
      value={{
        setEditProfile,
        editProfile,
        updateProfile,
        newUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

