import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { CartContext } from "../../Components/CartContext";
import "./Navbar.css"
import { Drawer } from "@mui/material";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { cart, deleteItem, getCartTotal } = useContext(CartContext)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const handleDeleteItem = (product) => {
        deleteItem(product)
    }

    const totalPrice = getCartTotal()
    
    const DrawerList = (
        <div className="drawer-container">
            <div className="drawer-head-container">
                <h1>Shopping Cart</h1>
                <CloseOutlinedIcon onClick={toggleDrawer(false)} />
            </div>
            <div className="drawer-product">
                {cart.map(product => (
                    <div key={product.id} className="drawer-product-container">
                        <img src={product.img} alt={product.name} className="drawer-image" />
                        <div className="drawer-product-detail">
                            <p className="drawer-product-name">{product.name}</p>
                            <p>{product.quantity} x <span className="drawer-price">Rp. {(product.price - (product.price * product.discount / 100)).toLocaleString('en-us')}</span></p>
                        </div>
                        <DeleteOutlinedIcon onClick={() => handleDeleteItem(product)}/>
                    </div>
                ))}
            </div>
            <p className="drawer-subtotal">Subtotal <span>Rp. {totalPrice.toLocaleString('en-us')}</span></p>
            <div className="drawer-button-container">
                <Link to={'/cart'} className="drawer-button" onClick={toggleDrawer(false)}>Cart</Link>
                <Link to={'/checkout'} className="drawer-button">Checkout</Link>
                <Link className="drawer-button">Comparison</Link>
            </div>
        </div>
    )
    return(
        <nav>
            <div className="nav-logo-container">
                <img src="/logo.png" alt="Furniro Logo" className="nav-logo"/>
                <h1 className="nav-name">Furniro</h1>
            </div>
            <ul className="nav-link">
                <li><Link to={'/'} className="link">Home</Link></li>
                <li><Link to={'/shop'} className="link">Shop</Link></li>
                <li>About</li>
                <li><Link to={'/contact'} className="link">Contact</Link></li>
            </ul>
            <ul className="nav-interact">
                <li><PersonOutlineOutlinedIcon fontSize="medium"/></li>
                <li><SearchOutlinedIcon fontSize="medium"/></li>
                <li><FavoriteBorderOutlinedIcon fontSize="medium"/></li>
                <li onClick={toggleDrawer(true)}>
                    <Badge badgeContent={cart.length} color="primary">
                        <ShoppingCartOutlinedIcon fontSize="medium"/>
                    </Badge>
                </li>
            </ul>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                {DrawerList}
            </Drawer>
        </nav>
    )
}

export default Navbar