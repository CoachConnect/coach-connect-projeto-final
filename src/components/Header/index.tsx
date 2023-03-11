import { useRef, useState } from "react"
import  {GiHamburgerMenu}  from "react-icons/gi" 
import { Link } from "react-router-dom"
import { StyledButton, StyledButtonLink } from "../../styles/buttons"
import FormLogin from "../Form/FormLogin"
import Input from "../Form/Input"
import { StyledHeader } from "./header"

interface IRoutesHeadersProps{
    route: string,
    text: string,
}

const Header = ({route, text}: IRoutesHeadersProps ) => {
    
    const menuDropRef = useRef(null)
    const loginDropRef = useRef(null)
    const [menu, setMenu] = useState(false)
    const [login, setLogin] =useState(false)

    return(
        <>
            <StyledHeader>
                <div className="containerHeader">
                    <div className="contentLogo">
                            <h1>CoachConnect</h1>
                        </div>
                        <GiHamburgerMenu className="btnDropMenu" onClick={() => setMenu(!menu)}/>
                        <nav 
                        ref={menuDropRef}
                        className={`menu ${menu ? "active" : "inactive"}`}
                        >         
                            <StyledButton className="btnLogin" type="button" onClick={() => setLogin(!login)}>Entrar</StyledButton>
                            <div ref={loginDropRef} className={`containerLoginForm ${login? "activeLogin" : "inactiveLogin"} `} >
                                <FormLogin />
                            </div>                  
                            <StyledButtonLink to={route}>{text}</StyledButtonLink>
                            <StyledButtonLink to="/register">Cadastre-se</StyledButtonLink>
                           
                        
                        </nav>
                    
                </div>
            </StyledHeader>
        </>
    )
}

export default Header