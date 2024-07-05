import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { CartProvider } from "../Components/CartContext"

const Layout = ({children}) => {
    return(
        <>
            <CartProvider>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </CartProvider>
        </>
    )
}

export default Layout