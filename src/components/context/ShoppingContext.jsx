import { createContext, useState } from 'react'

export const ShoppingContext = createContext();

const ShoppingContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const getCartItem = (id) => {
        return cart.find(item => item.id === id)
    }

    const addToCart = (id) => {
        const itemInCart = getCartItem(id)
        const newItem = products.find(product => product.id === id)

        let updatedCart = cart.map(item => item);

        if (!itemInCart)
            updatedCart.push({...newItem, quantity: 1})

        else {
            updatedCart.forEach(item => item.id === newItem.id ? (item.quantity += 1) : item)
        }
        setCart(updatedCart)
    }

    const removeFromCart = (id, all = false) => {
        const itemInCart = getCartItem(id)

        let updatedCart;

        if (!all && itemInCart.quantity > 1) {
            updatedCart = cart.map(item => {
                if (item.id === id) {
                    item.quantity -= 1;
                }
                return item
            })
        } else {
            updatedCart = cart.filter(item => item.id !== id)
        }
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <ShoppingContext.Provider value={{
            products,
            setProducts,
            cart,
            setCart,
            addToCart,
            removeFromCart,
            clearCart
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingContextProvider