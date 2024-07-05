import { useContext } from "react"
import { CartContext } from "../../Components/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import { LowBanner, TopBanner } from "../../Components/Banner/Banner";
import "./Cart.css"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, deleteItem, getCartTotal } = useContext(CartContext)

    const handleDelete = (product) => {
        deleteItem(product)
    }

    const totalPrice = getCartTotal()

    return(
        <div>
            <TopBanner page={"Cart"} />
            <div className="cart-container">
                <div>
                    <table>
                        <tbody>
                        <tr className="cart-table-head">
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <th className="cart-image-container"><img src={item.img} alt={item.name} className="cart-image"/></th>
                                <th>{item.name}</th>
                                <th>Rp. {item.price.toLocaleString('en-us')}</th>
                                <th>{item.quantity}</th>
                                <th>Rp. {((item.price - (item.price * item.discount / 100)) * item.quantity).toLocaleString('en-useState')}</th>
                                <th><DeleteIcon onClick={() => handleDelete(item)}/></th>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="cart-total-container">
                    <h1>Cart Totals</h1>
                    <div className="total">
                        <p className="total-text">Subtotal</p>
                        <p className="subtotal-price">Rp. {totalPrice.toLocaleString('en-us')}</p>
                    </div>
                    <div className="total">
                        <p className="total-text">Total</p>
                        <p className="total-price">Rp. {totalPrice.toLocaleString('en-us')}</p>
                    </div>
                    <Link to={'/checkout'} className="cart-checkout-button">Check Out</Link>
                </div>
            </div>
            <LowBanner/>
        </div>
    )
}

export default Cart
