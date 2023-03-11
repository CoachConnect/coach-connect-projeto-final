import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"
import photo3 from "../../assets/photo3.jpg"
import photo4 from "../../assets/photo4.jpg"
import photo5 from "../../assets/photo5.jpg"
import photo9 from "../../assets/photo9.jpg"
import { StyledDiv, StyledImage } from './carrossel'

const SectionCarousel = () => {

    return(
        <Carousel autoPlay={true} infiniteLoop={true} interval={2500} showArrows={false} showThumbs={false} > 
            <StyledDiv>
                <StyledImage src={photo1} alt="" />
                <p>Um corpo bem desenvolvido, é uma mente desenvolvida!</p>
            </StyledDiv>
            <StyledDiv>
                <StyledImage src={photo2} alt="" />
                <p>Com uma mente bem desenvolvida, temos mais calma e paz!</p>
            </StyledDiv>
            <StyledDiv>
                <StyledImage src={photo4} alt="" />             
            </StyledDiv>
            <StyledDiv>
                <StyledImage src={photo5} alt="" />               
            </StyledDiv>
            <StyledDiv>
                <StyledImage src={photo9} alt="" />
                <p>Um acompanhamento diferenciado!</p>             
            </StyledDiv>
        </Carousel>
    )
}

export default SectionCarousel