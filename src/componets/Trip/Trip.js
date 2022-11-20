import React from 'react'
import SubTitle from '../../componets/SubTitle/SubTitle'
import Card from '../Card/Card'
import './Trip.scss'
import DataProducts from '../../data/Data'
const Trip = () => {
    return (
        <div className='Trip u-paddingSection'>
            <SubTitle title='Recent Trips' description='You can discover unique destinations using Google Maps.' />
            <div className="Trip-cards">
                {DataProducts.map((item, i) => <Card key={i} image={item.thumbmail} title={item.name} text={item.description} />)}
            </div>
        </div>
    )
}

export default Trip