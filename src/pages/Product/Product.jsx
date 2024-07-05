import { useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { Breadcrumbs, Typography, Rating } from "@mui/material"
import { CartContext } from "../../Components/CartContext";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import data from "../../assets/data"
import Card from "../../Components/Card/Card";
import "./Product.css"
import { yellow } from "@mui/material/colors";
const Product = () => {
    const { id } = useParams()
    const { addToCartWithNumber } = useContext(CartContext)
    const [number, setNumber] = useState(1)
    const navigation = useNavigate()
    const product = data.find( data => data.id == id)
    const increment = () => {
        setNumber(number => number + 1)
    }

    const decrement = () => {
        setNumber(number => number - 1)
    }

    const handleNavigate = () => {
        navigation(`/compare/${product.id}`)
    }

    console.log(number)
    return(
        <div>
            <div className="breadcrumbs-container">
                <Breadcrumbs separator=">">
                    <Link to={'/'} className="breadcrumbs-link">Home</Link>
                    <Link to={'/shop'} className="breadcrumbs-link">Shop</Link>
                    <Typography>{product.name}</Typography>
                </Breadcrumbs>
            </div>
            <div className="product-detail-container">
                <img src={product.img} alt={product.name} className="product-image"/>
                <div>
                    <h1 className="product-name">{product.name}</h1>
                    <h3 className="product-price">Rp. {product.price.toLocaleString('en-us')}</h3>
                    <div className="rating-container">
                        <Rating value={4.5} precision={0.5} sx={{color: yellow[700]}} readOnly />
                        <p>5 customer review</p>
                    </div>
                    <p className="product-desc">{product.description}</p>
                    <p>Size</p>
                    <div className="size-container">
                        <button className="size-button">M</button>
                        <button className="size-button">L</button>
                        <button className="size-button">XL</button>
                    </div>
                    <p>Color</p>
                    <div className="color-container"> 
                        <button style={{backgroundColor: product.color.one}} className="color-button"></button>
                        <button style={{backgroundColor: product.color.two}} className="color-button"></button>
                        <button style={{backgroundColor: product.color.three}} className="color-button"></button>
                    </div>
                    <div className="button-add-container">
                        <div className="button-number-container">
                            <button className="decrement-button" disabled={number === 1} onClick={decrement}>-</button>
                            <input value={number} disabled className="number-display"></input>
                            <button className="increment-button" onClick={increment}>+</button>
                        </div>
                        <button onClick={() => addToCartWithNumber(product, number)}>Add To Cart</button>
                        <button onClick={handleNavigate}>+ Compare</button>
                    </div>
                    <div className="product-more-detail">
                        <ul className="list">
                            <li className="product-share"><span className="list-name">SKU</span> : S0{product.id}</li>
                            <li className="product-share"><span className="list-name">Category</span> : {product.type}</li>
                            <li className="product-share"><span className="list-name">Tags</span> : {product.type}</li>
                            <li className="product-share"><span className="list-name">Share</span> : <FacebookIcon /> <LinkedInIcon /> <XIcon /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-description-container">
                <div>
                    <h3>Description</h3>
                    <h3>Additional Information</h3>
                    <h3>Reviews</h3>
                </div>
                <p>{product.description}</p>
                <div>
                    <img src={product.img} alt={product.name} className="product-image"/>
                    <img src={product.img} alt={product.name} className="product-image"/>
                </div>
            </div>
            <div className="related-product-container">
                <h3>Related Products</h3>
                <div className="related-product-card-container">
                    {data.slice(0,4).map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
                <Link to={'/shop'} className="related-product-button">Show More</Link>
            </div>
        </div>
    )
}

export default Product