import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../CartContext"
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import * as Icon from "akar-icons"
import "./Card.css"
const Card = ({item}) => {
    const navigate = useNavigate()
    const { addToCartWithNumber } = useContext(CartContext)
    const discountPrice = item.price - (item.price * item.discount / 100)

    const handleClick = () => {
        navigate(`/product/${item.id}`)
    }

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCartWithNumber(item)
    }

    return(
        <div onClick={handleClick} className="card-container"> 
            <div className="card-image-container">
                <img src={item.img} alt={item.name} className="card-image" />
            </div>
            {item.new ? <span className="card-new sticker">New</span> : item.discount != 0 ? <span className="card-discount sticker">{`-${item.discount}%`}</span> : null}
            <div className="card-detail-container">
                <h1 className="card-name">{item.name}</h1>
                <span className="card-tag">{item.tag}</span>
                <div className="card-price-container">
                    <h3 className="card-final-price">{`Rp ${discountPrice.toLocaleString('en-us')}`}</h3>
                    {item.discount != 0 ? <h4 className="card-price">{`Rp ${item.price.toLocaleString('en-us')}`}</h4> : null}
                </div>
            </div>
            <div className="card-popup">
                <button className="card-button" onClick={handleAddToCart}>Add to cart</button>
                <ul className="card-popup-interact">
                    <li><ShareIcon/> Share</li>
                    <li><SyncAltIcon /> Compare</li>
                    <li><FavoriteIcon /> Like</li>
                </ul>
            </div>
        </div>
    )
}

export default Card