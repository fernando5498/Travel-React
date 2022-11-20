import React from 'react'
import Montain1 from '../../assets/Montain.jpg'
import Montain2 from '../../assets/Contact-hero.jpg'
import Montain3 from '../../assets/5.jpg'
import Montain4 from '../../assets/8.jpg'
import SubTitle from '../../componets/SubTitle/SubTitle'
import FistDescription from './FistDescription'
const Destination = () => {
    return (
        <div className="Destination u-paddingSection">
            <SubTitle title='Popular Destinations' description='Tours give you the opportunity to see a lot, within a time frame.' />
            <FistDescription
                className='FirsDescription'
                title='Taal Volcano, Batangas'
                description='One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!'
                image1={Montain1}
                image2={Montain2}
            />
            <FistDescription
                className='FirsDescription FirsDescription--reverse'
                title='Mt. Daguldul, Batangas'
                description='If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim.'
                image1={Montain3}
                image2={Montain4}
            />
        </div>
    )
}
Destination.defaultProps = {}

export default Destination