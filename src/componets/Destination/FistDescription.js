import React from 'react'
import './FistDescription.scss'
const FistDescription = ({ className = 'FirsDescription', title, description, image1, image2 }) => {
    return (
        <div className={className}>
            <div className="FirsDescription-text">
                <h2 className="FirsDescription-text-h">{title}</h2>
                <p className="FirsDescription-text-p">{description}</p>
            </div>
            <div className="FirsDescription-images">
                <img src={image1} alt="Montain" />
                <img src={image2} alt="Montain" />
            </div>
        </div>
    )
}

export default FistDescription