import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext"


const ProtectedPages = () => {

    const navigate = useNavigate()

    const { user } = useContext(RegisterAndLoginContext)


    useEffect(() => {
        if(!user){    
        navigate("/")
       
        }
        else if(user.isAdmin){
            navigate("/user/personal")
        }
        else if(!user.isAdmin){
            navigate("/user/dashboard")
        }
    }, [])

    return user ? <Outlet /> : null
}

export default ProtectedPages
