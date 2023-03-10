import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"
import photo3 from "../../assets/photo3.jpg"
import photo4 from "../../assets/photo4.jpg"
import photo5 from "../../assets/photo5.jpg"
import StyledImage from './carrossel'

const SectionCarousel = () => {

    return(
        <Carousel autoPlay={true} infiniteLoop={true} interval={2500} showArrows={false}>
            <div>
                <StyledImage src={photo1} alt="" />
            </div>
            <div>
                <StyledImage src={photo2} alt="" />
            </div>
            <div>
                <StyledImage src={photo3} alt="" />
            </div>
            <div>
                <StyledImage src={photo4} alt="" />
            </div>
            <div>
                <StyledImage src={photo5} alt="" />
            </div>
        </Carousel>
    )
}

export default SectionCarousel