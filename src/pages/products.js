import React from 'react'
import ProductList from '../components/productsList/ProductList'
import Navbar from '../components/navbar/Navbar'

const products = () => {
    return (
        <>
            <Navbar />
            <ProductList />
        </>
    )
}

export default products