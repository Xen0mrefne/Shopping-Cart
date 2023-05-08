import React, { useContext, useEffect } from 'react'
import { ShoppingContext } from './context/ShoppingContext'
import CartItem from './CartItem'

const Cart = () => {

    const { cart, clearCart } = useContext(ShoppingContext)

    return (
        <div className='cart absolute top-12 rounded-md shadow-md p-3 bg-white overflow-hidden w-[320px]'>
            {cart.length > 0 && <>
                <ul className='flex flex-col items-center gap-y-2 mb-3 max-h-96 overflow-y-auto'>
                {cart.map((item, index) => {
                    return (
                        <CartItem key={index} item={item} />
                    )
                })}
            </ul>
            <div className='pt-2 mt-2 border-t'>
                <button onClick={clearCart} className='p-2 rounded-md text-red-600 hover:bg-red-200 bg-opacity-40'>
                    Remover todo
                </button>
            </div>
            </>}

            {cart.length === 0 &&
            <div className='w-[320px] p-5'>
                <p className='text-gray-600'>El carrito esta vacio, prueba agregar algunos productos</p>
            </div>}
            
        </div>
    )
}

export default Cart