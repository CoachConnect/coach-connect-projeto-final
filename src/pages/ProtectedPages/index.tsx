import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext"


const ProtectedPages = () => {

    const navigate = useNavigate()

    const { user } = useContext(RegisterAndLoginContext)

    useEffect(() => {
        if(user?.isAdmin){

        }
        else if(!user?.isAdmin){
            
        }
        else{
            navigate("/")
        }
    }, [])
    return(
        <>

        </>
    )
}

export default ProtectedPages
