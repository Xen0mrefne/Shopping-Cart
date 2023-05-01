import React, { useContext } from 'react'
import { ShoppingContext } from './context/ShoppingContext';

const CartItem = ({ item }) => {

    const { addToCart, removeFromCart } = useContext(ShoppingContext)

    const { quantity, title, price, thumbnail, id } = item;

    return (
        <li className='w-full max-w-[700px] p-5 pt-8 shadow-md relative'>
            <div className='absolute top-1 right-2 bg-white p-2'>
                <button className='text-red-500 bg-opacity-40 hover:bg-red-200 rounded h-8 aspect-square' onClick={() => {removeFromCart(id, true)}}>X</button>
            </div>
            <div className='flex p-4 gap-x-3 mb-3'>
                <img className='h-16 aspect-square object-contain' src={thumbnail} alt="" />
                <div className='h-16'>
                    <p className='mb-4 overflow-hidden whitespace-nowrap text-ellipsis w-32'>{title}</p>
                    <p>${price}</p>
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