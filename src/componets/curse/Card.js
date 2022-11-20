import React from 'react'
import './Card.scss'

const Card = ({ img, title, reinado, vacas, funcion }) => {
    const deleted = (e) => {
        e.target.parentNode.remove()
    }
    return (
        <div className='card'>
            <p><span className='text-red'>{title.toUpperCase()}</span> ha comido {vacas} vacas en sus {reinado} años de reinado.</p>
            <img src={img} alt={title} />
            <button onClick={deleted}>Borrar</button>
        </div>
    )
}

export default Card