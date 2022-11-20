import React from 'react'
import Footer from '../componets/Footer/Footer'
import GoTop from '../componets/GoTop/GoTop'
import Navbar from '../componets/Navbar/Navbar'
import Product from '../componets/Product/Product'


const Home = () => {
    return (
        <>
            <Navbar />
            <Product />
            <Footer />
            <GoTop />
        </>
    )
}

export default Home