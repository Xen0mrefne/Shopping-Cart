import React, { useContext, useEffect } from 'react'
import { ShoppingContext } from './context/ShoppingContext'
import Product from './Product'

const Home = () => {

    const { products, setProducts } = useContext(ShoppingContext)

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,thumbnail')
            .then(res => res.json())
            .then(({ products }) => {
                setProducts(products)
            });
    }, [])

    return (
        <section>
            <ul className='min-h-screen flex flex-wrap justify-center gap-3 px-[5%]'>
                {products.map((product, index) => {
                    return (
                        <Product key={index} index={index} product={product} />
                    )
                })}
            </ul>
        </section>
    )
}

export default Home