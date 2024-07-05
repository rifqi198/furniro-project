import { Link } from "react-router-dom"
import Card from "../../Components/Card/Card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "../../assets/data"
import "./Home.css"
import Slider from "react-slick"

const Home = () => {
    const range = [{
        id: 1,
        img: "./dining.png",
        type: "Dining",
        room: "Dining Room",
    },{
        id: 2,
        img: "./living.png",
        type: "Living",
        room: "Living Room"
    },{
        id: 3,
        img: "./bedroom.png",
        type: "Bedroom",
        room: "Bed Room"
    }]

    const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
    }

    const inspirationCard = (item) => {
        return(
            <div key={item.id} className="slides-container">
                <img src={item.img} alt={item.room} className="carousel-image"/>
                {/* <div className="slides-text">
                    <span>0{item.id} - {item.room} </span>
                    <h3>Comfort Zone</h3>
                    <button><ArrowForwardIcon/></button>
                </div> */}
            </div>
        )
    }

    return(
        <div>
            <div className="home-banner" style={{}}>
                <div className="home-banner-box">
                    <span>New Arrival</span>
                    <h1 className="home-banner-headline">Discover Our New Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <Link to={'/shop'} className="buy-now-link">BUY NOW</Link>
                </div>
            </div>
            <div className="home-range-container">
                <h1 className="range-title">Browse The Range</h1>
                <p className="range-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <section className="home-range">
                    {range.map(item => (
                        <div className="range-container" key={item.id}>
                            <span className="range-image" style={{
                                background: `url(${item.img}) no-repeat center`,
                                backgroundSize: "cover"
                                }}></span>
                            <h2 className="range-type">{item.type}</h2>
                        </div>
                    ))}
                </section>  
            </div>
            <section className="home-product">
                <h1>Our Products</h1>
                <div className="home-product-section">
                    {data.slice(0,8).map(item => (
                        <Card key={item.id} item={item}/>
                    ))}    
                </div>
                <button className="home-product-more">Show More</button>
            </section>
            <section className="home-inspiration-container">
                <div className="home-inspiration-text">
                    <h1>50+ Beautiful rooms inspiration</h1>
                    <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button>Explore More</button>
                </div>
                <Slider {...settings} className="home-inspiration-slider">
                    {range.map(item => (
                        <div>
                            {inspirationCard(item)} 
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="home-last">
                <span>Share your setup with</span>
                <h1>#FurniroFurniture</h1>
            </section>
        </div>
    )
}

export default Home