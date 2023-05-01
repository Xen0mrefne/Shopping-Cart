import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <section className='h-screen bg-stone-200 flex flex-col gap-y-3 justify-center items-center'>
            <h1 className='font-bold text-3xl'>Oops!</h1>
            <p>Lo sentimos, ha ocurrido un error inesperado</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className='text-xl text-violet-400 hover:text-violet-600'>Volver al Inicio</Link>
        </section>
    )
}

export default ErrorBoundary