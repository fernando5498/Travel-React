import React from 'react'
import { NavLink } from "react-router-dom";
import './Card.scss'

const Card = ({ image, title, text }) => {
    return (
        <NavLink to={`/resumen/${title}`} className='Card'>
            <div className="Card-image">
                <img src={image} alt={title} />
            </div>
            <h5 className='Card-title'>{title}</h5>
            <p className='Card-p'>{text}</p>
        </NavLink>
    )
}

export default Card