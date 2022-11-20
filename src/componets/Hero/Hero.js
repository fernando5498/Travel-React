import './Hero.scss'
import { Link } from "react-router-dom";
import HomeImage from '../../assets/Home-hero.jpg'
const Hero = ({ className, img, title, text, classButton, urlButton, labelButton }) => {
    return (
        <div className={className}>
            <div className='Hero-image'><img src={img} alt="Home Hero" /></div>
            <div className="Hero-text u-paddingSection">
                <h1 className='Hero-text-h'>{title}</h1>
                <p className='Hero-text-p'>{text}</p>
                <Link className={classButton} to={urlButton}>{labelButton}</Link>
            </div>
        </div>
    )
}
Hero.defaultProps = {
    className: 'Hero',
    img: HomeImage,
    title: 'Your Journey Your Story',
    classButton: 'Button Button--white',
    urlButton: '/',
    labelButton: 'Travel Plan'
}

export default Hero