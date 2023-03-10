import { Link } from "react-router-dom"
import Header from "../../components/Header"
import FormLogin from "../../components/Form/FormLogin"
import StyledMainHomePage from "./home"
import { StyledButtonLink } from "../../styles/buttons"
import photo1 from "../../assets/photo1.svg"
import photo2 from "../../assets/photo2.svg"
import photo3 from "../../assets/photo3.svg"

const Home = () => {

    return(
        <>
            <Header route="/aboutUs" text="Sobre Nós"/>          
            <StyledMainHomePage> 
               
                <h2>Conectamos você com o seu personal trainer!</h2>     
                <section className="contentImgs">
                    <img src={photo1} alt="" />
                    <img src={photo2} alt="" />
                    <img src={photo3} alt="" />
                </section>  
                <StyledButtonLink className="btnRegister" to="/register">Cadastrar</StyledButtonLink>           
            </StyledMainHomePage>
        </>
    )
}

export default Home
