import React from 'react'
import './ContactForm.scss'
const ContactForm = () => {
    return (
        <div className='ContactForm u-paddingSection'>
            <h2 className='ContactForm-h'>Send a message to us !</h2>
            <form className='ContactForm-form' action="">
                <input className='formInput' type="text" placeholder='Name' />
                <input className='formInput' type="email" placeholder='Email' />
                <input className='formInput' type="text" placeholder='Subject' />
                <textarea className='formTextarea' rows="6" placeholder='Message'></textarea>
                <button className='Button Button--dark u-w100'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm