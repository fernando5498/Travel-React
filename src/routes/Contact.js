import React from 'react'
import HeroImage from '../assets/Contact-hero.jpg'
import Navbar from '../componets/Navbar/Navbar'
import Hero from '../componets/Hero/Hero'
import Footer from '../componets/Footer/Footer'
import ContactForm from '../componets/ContactForm/ContactForm'
import GoTop from '../componets/GoTop/GoTop'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Hero className='Hero Hero--medium'
                img={HeroImage}
                title='Contact'
                classButton='u-show' />
            <ContactForm />
            <Footer />
            <GoTop />
        </>
    )
}

export default Contact