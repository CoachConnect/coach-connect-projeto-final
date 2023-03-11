import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export interface IDefaultProviderProps{
    children: React.ReactNode   
}

export interface IUser {
    accessToken: string,
    user: User
}

export interface User{
    id: number,
    email: string,
    name: string,
    isAdmin: boolean,
    photo?: string
}

export interface IUserRegisterForm{
    email: string,
    password: string,
    name: string,
    confirmPassword?: string,  
    monthlyPlan?: string
    isAdmin?: boolean,
    photo?: string | undefined
}

export interface IUserLoginForm{
    email: string,
    password: string
}

interface IRegisterAndLoginContext{
    user: User | null,
    userRegister: (dataRegister: IUserRegisterForm) => Promise<void>,
    userLogin: (dataLogin: IUserLoginForm) => Promise<void>,
    userLogout:  () => void
}

export const RegisterAndLoginContext = createContext({} as IRegisterAndLoginContext)

const RegisterAndLoginProvider = ({children}: IDefaultProviderProps) => {

    const navigate = useNavigate()

    const [user, setUser] = useState<User | null>(null)
    

    useEffect(() => {
        const id = localStorage.getItem("@id")
        if(id){
            const userLoad = async() => {               
                const token = localStorage.getItem("@token")
                try{
                    const response = await api.get(`/users/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    setUser(response.data)
                    if(response.data.isAdmin){
                        navigate("/user/personal")
                    }
                    else{
                        navigate("/user/dashboard")
                    }
                }
                catch(error){
                    console.error(error)
                }
            }
            userLoad()
        } 
    }, [])

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
                localStorage.setItem("@token", response.data.accessToken)
                localStorage.setItem("@id", JSON.stringify(response.data.user.id))
                setUser(response.data.user)
                navigate("/user/personal")
          }
          else{
                localStorage.setItem("@token", response.data.accessToken)
                localStorage.setItem("@id", JSON.stringify(response.data.user.id))
                setUser(response.data.user)
                navigate("/user/dashboard")                
            }

        }
        catch(error){
            console.error(error)
        }
    }

    const userLogout = () =>{

        setUser(null)
        localStorage.clear()
        navigate('/')
      }

    return(
        <RegisterAndLoginContext.Provider value={{
            user,
            userRegister,
            userLogin, 
            userLogout

        }}>
            {children}
        </RegisterAndLoginContext.Provider>
    )
}

export default RegisterAndLoginProvider