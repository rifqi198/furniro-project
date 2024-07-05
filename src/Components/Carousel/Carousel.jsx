import * as Icon from "akar-icons"
import "./Carousel.css"
const Carousel = (props) => {
    return(
        <div key={props.id} className="slides-container">
            <img src={props.img} alt={props.room} className="carousel-image"/>
            <div>
                <span>0{props.id} - {props.room} </span>
                <h3>Comfort Zone</h3>
                <button><Icon.ArrowRight/></button>
            </div>
        </div>
    )
}

export default Carousel