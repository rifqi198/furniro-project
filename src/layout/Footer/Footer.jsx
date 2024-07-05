import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return(
        <footer>
            <h1 className="footer-name">Furniro.</h1>
            <span className="footer-head">Links</span>
            <span className="footer-head">Help</span>
            <span className="footer-head">Newsletter</span>
            <p className="footer-address">400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</p>
            <ul className="footer-link links">
                <li><Link to={'/'} className="footer-link-option">Home</Link></li>
                <li><Link to={'/shop'} className="footer-link-option">Shop</Link></li>
                <li>About</li>
                <li><Link to={'/contact'} className="footer-link-option">Contact</Link></li>
            </ul>
            <ul className="footer-link help">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
            </ul>
            <form className="footer-form">
                <input type="email" placeholder="Enter Your Email Address"></input>
                <button type="submit">SUBSCRIBE</button>
            </form>
            <span className="footer-copyright">2023 furniro. All rights reserved</span>
        </footer>
    )
}

export default Footer