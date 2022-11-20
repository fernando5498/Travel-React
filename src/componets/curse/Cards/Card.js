import React from 'react'
import './Card.scss'
const Card = ({ name, img, price, color, funcion }) => {
    const comprar = (e) => {
        funcion((letTotal) => letTotal + price)
        e.target.parentNode.style.display = 'none'
    }
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <div className="card__img">
                <img src={img} alt={name} />
            </div>
            <h5 className="card__title">{name}</h5>
            <div className="card__price">{price}$</div>
            <button onClick={comprar}>Comprar</button>
        </div>
    )
}
Card.defaultProps = {
    name: 'raul',
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fjosefacchin.com%2Fcomo-quitar-el-fondo-de-una-imagen%2F&psig=AOvVaw0dLmfX5BvMvzTYI1eZE1MN&ust=1668798620504000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiWx7_1tfsCFQAAAAAdAAAAABAE',
    price: 'Free',
    color: 'red'
}

export default Card