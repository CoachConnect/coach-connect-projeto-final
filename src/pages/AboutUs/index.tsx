import SectionCarousel from "../../components/Carrossel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"
import photo3 from "../../assets/photo3.jpg"
import photo4 from "../../assets/photo4.jpg"
import photo5 from "../../assets/photo5.jpg"
import photo6 from "../../assets/photo6.jpg"
import photo7 from "../../assets/photo7.jpg"
import photo9 from "../../assets/photo9.jpg"
import StyledMainAboutUs from "./aboutUs"
import { StyledButtonLink } from "../../styles/buttons"

const AboutUs = () => {

    return(
        <>
            <Header route="/" text="Home" />
            <StyledMainAboutUs>
                <section className="sectionSlogan">
                    <p>Conectamos você com o seu personal trainer, para que você tenha na palma da sua mão um guia de exercícios incríveis, possibilitando:</p>
                </section>

                <section className="images">
                    <figure>
                        <img src={photo6} alt="" />
                        <figcaption>Maior versatilidade na escolha dos treinos!</figcaption>
                    </figure>
                    <figure>
                        <img src={photo3} alt="" />
                        <figcaption>Melhor organização para o seu dia a dia</figcaption>
                    </figure>
                    <figure>
                        <img src={photo7} alt="" />
                        <figcaption>Melhor organização para o seu dia a dia</figcaption>
                    </figure>
                </section>
            </StyledMainAboutUs>
            
            <Footer />
        </>
    )
}

export default AboutUs