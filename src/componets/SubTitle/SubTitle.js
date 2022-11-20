import React from 'react'
import './SubTitle.scss'
const SubTitle = ({ title, description }) => {
    return (
        <div className='SubTitle'>
            <h2 className="SubTitle-h">{title}</h2>
            <p className="SubTitle-p">{description}</p>
        </div>
    )
}
SubTitle.defaultProps = {
    title: 'Popular Destinations',
    text: 'Tours give you the opportunity to see a lot, within a time frame.'
}

export default SubTitle