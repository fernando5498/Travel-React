import image from '../../gallery-4.webp'
import { useRef } from "react";
import './Main.scss'

function Main() {
    // const refCaja = useRef()
    // const incrementar = (e) => {
    //     refCaja.current.innerHTML = Number(refCaja.current.innerHTML) + 1
    //     if (refCaja.current.innerHTML >= 8) {
    //         refCaja.current.style.backgroundColor = 'red'
    //     }
    //     if (refCaja.current.innerHTML >= 10) {
    //         refCaja.current.innerHTML = 1
    //         refCaja.current.style.backgroundColor = 'transparent'
    //     }
    // }
    // const change_image = (e) => {
    //     if (e.target.src.includes('gallery')) {
    //         e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN2P5YcOKn24rv1071WX1cQujWc1BXQRRcw&usqp=CAU'
    //     } else {
    //         e.target.src = image
    //     }
    // }
    const change_image = (e) => {
        if (e.target.src.includes('encrypted-tbn0.gstatic.com')) {
            e.target.src = ''
        } else {
            e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN2P5YcOKn24rv1071WX1cQujWc1BXQRRcw&usqp=CAU'
        }
        e.target.parentNode.style.backgroundColor = 'transparent'

    }
    const change_text = (e) => {
        e.target.innerHTML = 'transparent'
        if (e.target.innerHTML === 'transparent') {
            e.target.innerHTML = ''
        }
    }

    return (
        <>
            {/* <div ref={refCaja} className='caja'>1</div>
            <button onClick={incrementar} className='mx-auto'>Aumentar</button>
            <img onClick={change_image} className='mx-auto' src={image} alt="logo" /> */}
            <div onClick={change_image} className="card">
                <img src={image} alt="image_1" />
                <h5 onClick={change_text}>Sisebuto</h5>
            </div>
            <div onClick={change_image} className="card">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN2P5YcOKn24rv1071WX1cQujWc1BXQRRcw&usqp=CAU' alt="image_1" />
                <h5 onClick={change_text}>Leogivildo</h5>
            </div>
            <div onClick={change_image} className="card">
                <img src='https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png' alt="image_1" />
                <h5 onClick={change_text}>Atanagildo</h5>
            </div>
        </>
    );
}

export default Main;