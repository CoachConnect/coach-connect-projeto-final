import {AiOutlineHome} from "react-icons/ai"
import { Link } from "react-router-dom"

import RegisterForm from "../../components/Form/RegisterForm"
import Header from "../../components/Header"
import { StyledHeader } from "../../components/Header/header"
import {StyledMainRegisterPage} from "./registerPage"


const Register = () => {

    return(
        <>
            <StyledHeader>
               <div className="containerHeader">
                     <div className="contentLogo">
                        <h1>CoachConnect</h1>
                    </div>      
                    <nav><Link to="/"><AiOutlineHome color="green"/></Link></nav>
               </div>
            </StyledHeader>
            <StyledMainRegisterPage>
                <h2>Cadastro</h2>
                <RegisterForm />
            </StyledMainRegisterPage>
        </>
    )
}

export default Register