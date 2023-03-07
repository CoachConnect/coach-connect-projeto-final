import { Link } from "react-router-dom"
import FormLogin from "../Form/FormLogin"
import Input from "../Form/Input"

const Header = () => {
  

    return(
        <>
            <header>
                <div className="contentLogo">
                    <h1></h1>
                </div>
                <nav>
                    
                <FormLogin />
                </nav>
            </header>
            <main>
                <Link to="/register">Cadastrar</Link>
            </main>
        </>
    )
}

export default Header