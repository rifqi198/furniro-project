import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

  const addToCartWithNumber = (product, number) => {
    const isInCart = cart.find((cart) => cart.id === product.id);

    if (isInCart) {
      setCart(
        cart.map((cart) =>
          cart.id === product.id
            ? { ...cart, quantity: cart.quantity + number }
            : cart
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const deleteItem = (product) => {
    setCart(cart.filter(item => item.id != product.id))
  }

  // const removeFromCart = (product) => {
  //   const isInCart = cart.find((cartItem) => cartItem.id === product.id);

  //   if (isInCart.quantity === 1) {
  //     setCart(cart.filter((cartItem) => cartItem.id !== product.id));
  //   } else {
  //     setCart(
  //       cart.map((cartItem) =>
  //         cartItem.id === product.id
  //           ? { ...cartItem, quantity: cartItem.quantity - 1 }
  //           : cartItem
  //       )
  //     )
  //   }
  // }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price - (item.price * item.discount / 100)) * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, [])

  return (
    <CartContext.Provider value={{ cart, addToCartWithNumber, deleteItem, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}
