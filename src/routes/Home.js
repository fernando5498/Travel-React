import React from 'react'
import Destination from '../componets/Destination/Destination'
import Footer from '../componets/Footer/Footer'
import GoTop from '../componets/GoTop/GoTop'
import Hero from '../componets/Hero/Hero'
import Navbar from '../componets/Navbar/Navbar'
import Trip from '../componets/Trip/Trip'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero text='Choose Your Favourite Destination' urlButton='/about' />
            <Destination />
            <Trip />
            <Footer />
            <GoTop />
        </>
    )
}

export default Home