import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export interface IDefaultProviderProps{
    children: React.ReactNode   
}
export interface IUser {
    acessToken: string,
    user: User
}

export interface User{
    id: number,
    email: string,
    name: string,
    isAdmin: boolean
}

export interface IUserRegisterForm{
    email: string,
    password: string,
    name: string,
    confirmPassword?: string,  
    monthlyPlan?: string
    isAdmin?: boolean
}

export interface IUserLoginForm{
    email: string,
    password: string
}

interface IRegisterAndLoginContext{
    user: User | null,
    userRegister: (dataRegister: IUserRegisterForm) => Promise<void>,
    userLogin: (dataLogin: IUserLoginForm) => Promise<void>
}


const RegisterAndLoginContext = createContext({} as IRegisterAndLoginContext)


const RegisterAndLoginProvider = ({children}: IDefaultProviderProps) => {

    const navigate = useNavigate()

    const [user, setUser] = useState<User | null>(null)

    const userRegister = async(dataRegister: IUserRegisterForm) => {
        try{
            await api.post<IUser>("/register", dataRegister)
            navigate("/")
        }
        catch(error){
            console.error(error)
        }
    }

    const userLogin = async(dataLogin : IUserLoginForm) => {
        try{
          const response = await api.post<IUser>("/login", dataLogin)

          if(response.data.user.isAdmin){
                localStorage.setItem("@token", response.data.acessToken)
                localStorage.setItem("@id", JSON.stringify(response.data.user.id))
                setUser(response.data.user)
          }
          else{
                localStorage.setItem("@tokenUser", response.data.acessToken)
                localStorage.setItem("@idUser", JSON.stringify(response.data.user.id))
                setUser(response.data.user)
            }

        }
        catch(error){
            console.error(error)
        }
    }

    return(
        <RegisterAndLoginContext.Provider value={{
            user,
            userRegister,
            userLogin, 

        }}>
            {children}
        </RegisterAndLoginContext.Provider>
    )
}