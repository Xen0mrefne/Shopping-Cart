import React, { useContext } from 'react'
import { ShoppingContext } from './context/ShoppingContext'

const Product = ({ product }) => {

  const { addToCart } = useContext(ShoppingContext)

  const { id, title, price, thumbnail } = product



  return (
    <li className='bg-white shadow rounded w-[250px] overflow-hidden'>
      <img className='w-full aspect-square object-contain' src={thumbnail} alt={title} />
      <div className='p-3 flex flex-col gap-y-2'>
        <h3 className='text-xl w-full overflow-hidden whitespace-nowrap text-ellipsis'>{title}</h3>
        <p>${price}</p>
        <button className='p-2 rounded text-violet-700 self-end hover:bg-violet-400 hover:bg-opacity-40' onClick={() => { addToCart(id) }}>Agregar al Carrito</button>
      </div>
    </li>
  )
}

export default Product