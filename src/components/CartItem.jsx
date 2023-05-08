import React, { useContext } from 'react'
import { ShoppingContext } from './context/ShoppingContext';

const CartItem = ({ item }) => {

    const { addToCart, removeFromCart } = useContext(ShoppingContext)

    const { quantity, title, price, thumbnail, id } = item;

    return (
        <li className='w-full max-w-[700px] p-5 pt-8 shadow-md relative'>
            <div className='absolute top-1 right-2 bg-white p-2'>
                <button className='text-red-500 bg-opacity-40 hover:bg-red-200 p-1 rounded h-8 aspect-square' onClick={() => { removeFromCart(id, true) }}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7H20" stroke="#f05151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                            stroke="#f05151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#f05151" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className='flex p-4 gap-x-3 mb-3'>
                <img className='h-16 aspect-square object-contain' src={thumbnail} alt="" />
                <div className='h-16'>
                    <p className='mb-4 overflow-hidden whitespace-nowrap text-ellipsis w-32'>{title}</p>
                    <p>${price} x {quantity} = ${price * quantity}</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex items-center bg-white text-black border rounded overflow-hidden'>
                    <button className='h-8 aspect-square shadow-inner border disabled:pointer-events-none disabled:text-gray-600 disabled:bg-gray-100' disabled={quantity === 1 ? true : false} onClick={() => { removeFromCart(id) }}>-</button>
                    <span className='w-8 text-center block'>{quantity}</span>
                    <button className='h-8 aspect-square shadow-inner border' onClick={() => { addToCart(id) }}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem