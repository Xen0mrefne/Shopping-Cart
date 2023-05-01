import React, { useState } from 'react'
import Cart from './Cart'

const Navbar = () => {

  const [showCart, setShowCart] = useState(false) 

  return (
    <div className='fixed bg-violet-400 sm:h-[80px] top-0 left-0 right-0 py-3 px-[5%] flex flex-col sm:flex-row sm:justify-between items-center'>
      <div className='h-10 mb-4 sm:mb-0 aspect-square bg-white rounded-full'>

      </div>
      <div className='relative flex justify-center sm:justify-end'>
        <button onClick={() => {setShowCart(!showCart)}}>
          <svg className='h-[40px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3H4.5L6.5 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM6.07142 14H18L21 5H4.78571M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {showCart && <Cart />}
      </div>
    </div>
  )
}

export default Navbar