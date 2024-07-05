import { useParams, Link } from "react-router-dom"
import { Rating, Select, MenuItem } from "@mui/material"
import { TopBanner, LowBanner } from "../../Components/Banner/Banner"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import data from "../../assets/data"
import "./Compare.css"
import { useState } from "react"

const theme = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    '& .MuiPaginationItem-root': {
                        backgroundColor: '#F9F1E7',
                        margin: '0 1rem',
                        width: '3rem',
                        height: '3rem',
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'rgb(184, 142, 47)',
                        color: 'white',
                    },
                },
            },
        },
    },
})

export default function Compare(){
    const { id } = useParams()
    const [compareProduct, setCompareProduct] = useState(0)
    const product = data.find( data => data.id == id)
    const otherProduct = data.find(data => data.id == compareProduct)
    const handleChange = (event) => {
        setCompareProduct(event.target.value)
    }

    console.log(compareProduct)
    const productCard = (product) => {
        return(
            <div className="comparison-main-product">
                <img src={product.img} alt={product.name} className="compare-product-image"/>
                <h4 className="compare-product-name">{product.name}</h4>
                <p className="compare-product-price">Rp. {product.price.toLocaleString('en-us')}</p>
                <p className="compare-product-rating">4.5 <Rating value={4.5} precision={0.5} readOnly /></p>
            </div>
        )
    }

    return(
        <div>
            <TopBanner page={"Comparison"} />
            <div className="comparison-container">
                <div className="comparison-title-container">
                    <h2 className="comparison-title">Go to product page for more products</h2>
                    <Link to='/shop' className="comparison-link">View More</Link>
                </div>
                {productCard(product)}
                {compareProduct != 0 && productCard(otherProduct)}
                <div>
                    <h2>Add a Product</h2>
                    <Select value={compareProduct} onChange={handleChange} className="comparison-product-select" sx={{color: "white", border: "none"}} fullWidth displayEmpty>
                    <MenuItem disabled value=""><em>Select a Product</em></MenuItem>
                        {data.map(item => (
                            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div className="comparison-detail-container">
                <table align="left">
                    <tbody>
                        <tr>
                            <th><h2 className="comparison-detail-title">General</h2></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Sales Package</th>
                            <th>1 sectional sofa</th>
                            <th>1 Three Seater, 2 Single Seater</th>
                        </tr>
                        <tr>
                            <th>Model Number</th>
                            <th>RFCBLIGRBL</th>
                            <th>DTUBLIGRBL</th>
                        </tr>
                        <tr>
                            <th>Secondary Material</th>
                            <th>Solid Wood</th>
                            <th>Solid Wood</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th><button className="comparison-add-button">Add To Cart</button></th>
                            <th><button className="comparison-add-button">Add To Cart</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <LowBanner />
        </div>
    )
}