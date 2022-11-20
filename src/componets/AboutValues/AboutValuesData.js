import React from 'react'
import './AboutValuesData.scss'
const AboutValuesData = ({ title, text }) => {
    return (
        <div className='Value'>
            <h3 className="Value-h">{title}</h3>
            <p className="Value-p">{text}</p>
        </div>
    )
}

export default AboutValuesData