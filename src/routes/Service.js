import React from 'react'
import HeroImage from '../assets/Montain.jpg'
import Navbar from '../componets/Navbar/Navbar'
import Hero from '../componets/Hero/Hero'
import Trip from '../componets/Trip/Trip'
import Footer from '../componets/Footer/Footer'
import GoTop from '../componets/GoTop/GoTop'

const Service = () => {
    return (
        <>
            <Navbar />
            <Hero className='Hero Hero--medium'
                img={HeroImage}
                title='Service'
                classButton='u-show' />
            <Trip />
            <Footer />
            <GoTop />
        </>
    )
}

export default Service