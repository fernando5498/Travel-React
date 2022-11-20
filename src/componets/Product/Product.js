
import { useParams } from 'react-router-dom'
import PorductsData from '../../data/Data'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Product.scss'
const Product = () => {
    let product = useParams()
    let ProductoSelected = PorductsData.find(item => item.name.includes(product.title))
    const [ImagePreview, setImagePreview] = useState(ProductoSelected.thumbmail)
    const changeImage = (e) => {
        setImagePreview(e.target.src)
    }
    return (
        <div className="u-paddingSection">
            <div className='Product'>
                <div className="Product-image">

                    {ImagePreview.includes('.mp4') ? <video controls src={ImagePreview} /> : <img src={ImagePreview} alt={ProductoSelected.name} />}
                </div>
                <div className="Product-content">
                    <h2 className='Product-content-h'>{ProductoSelected.name} <span className='Product-content-price'>{ProductoSelected.price}$</span></h2>
                    <p className="Product-content-p">{ProductoSelected.description}</p>
                    <NavLink to={'/singup'} className='Button Button--dark'>Reserve</NavLink>
                    <div className="Product-content-media">
                        {ProductoSelected.image.map((media, i) => media.includes('.mp4') ? <div><video key={i} onClick={changeImage} muted loop autoPlay src={media} /> </div> : <div><img key={i} onClick={changeImage} src={media} alt={ProductoSelected.name + i} /></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product