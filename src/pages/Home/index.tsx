import { Link } from "react-router-dom"
import Header from "../../components/Header"
import FormLogin from "../../components/Form/FormLogin"
import StyledMainHomePage from "./home"
import { StyledButtonLink } from "../../styles/buttons"
import SectionCarousel from "../../components/Carrossel"
import Footer from "../../components/Footer"


const Home = () => {

    return(
        <>
            <Header route="/aboutUs" text="Sobre Nós"/>          
            <StyledMainHomePage>              
                <h2>Conectamos você com o seu personal trainer!</h2>     
                <SectionCarousel />
                           
            </StyledMainHomePage>
            <Footer/>
        </>
    )
}

export default Home
