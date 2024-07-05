import { useContext } from "react"
import { TopBanner, LowBanner } from "../../Components/Banner/Banner"
import { CartContext } from "../../Components/CartContext"
import "./Checkout.css"

const Checkout = () => {
    const { cart, getCartTotal } = useContext(CartContext)
    const totalPrice = getCartTotal()
    return(
        <div>
            <TopBanner page={"Checkout"}/>
            <div className="checkout-container">
                <form className="checkout-input-container">
                    <h2>Billing Details</h2>
                    <div className="checkout-name-input">
                        <div className="checkout-input">
                            <label>First Name</label>
                            <input type="text" />
                        </div>
                        <div className="checkout-input">
                            <label>Last Name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="checkout-input">
                        <label>Company Name (Optional)</label>
                        <input type="text" />
                    </div>
                    <div className="checkout-input">
                        <label>Country / Region</label>
                        <select>
                            <option>Indonesia</option>
                            <option>Singapore</option>
                            <option>Malaysia</option>
                        </select>
                    </div>
                    <div className="checkout-input">
                        <label>Street Address</label>
                        <input type="text" />
                    </div>
                    <div className="checkout-input">
                        <label>Town / City</label>
                        <input type="text" />
                    </div>
                    <div className="checkout-input">
                        <label>Province</label>
                        <select>
                            <option>West Java</option>
                            <option>Riau</option>
                            <option>Bali</option>
                        </select>
                    </div>
                    <div className="checkout-input">
                        <label>ZIP Code</label>
                        <input type="number" />
                    </div>
                    <div className="checkout-input">
                        <label>Phone</label>
                        <input type="number" />
                    </div>
                    <div className="checkout-input">
                        <label>Email Address</label>
                        <input type="email" />
                    </div>
                    <div className="checkout-input">
                        <input type="text" placeholder="Additional Information" />
                    </div>
                </form>
                <div className="checkout-total-container">
                    <div className="total-property">
                        <h3>Product</h3>
                        <h3>Subtotal</h3>
                    </div>
                    {cart.map(item => (
                        <div className="total-property">
                            <p><span className="item-name">{item.name}</span> x {item.quantity}</p>
                            <p>Rp. {(item.price - (item.price * item.discount / 100)).toLocaleString('en-us')}</p>
                        </div>
                    ))}
                    <div className="total-property">
                        <p>Subtotal</p>
                        <p>Rp. {totalPrice.toLocaleString('en-us')}</p>
                    </div>
                    <div className="total-property">
                        <p>Total</p>
                        <p className="total-price">Rp. {totalPrice.toLocaleString('en-us')}</p>
                    </div>
                    <div className="payment-container">
                        <div>
                            <input type="radio" /> <label>Direct Bank Transfer</label>
                        </div>
                        <div>
                            <input type="radio" /> <label>Cash On delivery</label>
                        </div>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        <div className="checkout-button-container">
                            <button className="checkout-button">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <LowBanner/>
        </div>
    )
}

export default Checkout