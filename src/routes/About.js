import React from 'react'
import Hero from '../componets/Hero/Hero'
import Navbar from '../componets/Navbar/Navbar'
import HeroImage from '../assets/About-hero.jpg'
import Footer from '../componets/Footer/Footer'
import AboutValues from '../componets/AboutValues/AboutValues'
import GoTop from '../componets/GoTop/GoTop'

const About = () => {
    return (
        <>
            <Navbar />
            <Hero
                className='Hero Hero--medium'
                img={HeroImage}
                title='About'
                classButton='u-show'
            />
            <AboutValues />
            <Footer />
            <GoTop />
        </>
    )
}

export default About