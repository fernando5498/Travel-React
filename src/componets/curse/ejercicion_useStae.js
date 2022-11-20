import { useState } from 'react'
import './Main.scss'

const Main = () => {
    const aficiones = [
        {
            name: 'Ataulfo',
            aficion: 'Comer toros sin pelar'
        },
        {
            name: 'Recensivo',
            aficion: 'Leer en Hage'
        },
        {
            name: 'Teodirito',
            aficion: 'Ver documentales'
        }
    ]
    const [contador, setcontador] = useState(0)
    const [mensaje, setmensaje] = useState()
    function change() {
        setcontador(contador + 1)
        setmensaje(<p>La aficion principal de <span className='text-red'>{aficiones[contador].name}</span> es <span className='text-green'>{aficiones[contador].aficion}</span> </p>)
        if (contador + 1 >= aficiones.length) {
            setcontador(0)
        }

    }


    return (
        <div>
            <button onClick={change}>Ver siguiente</button>
            <div>{mensaje}</div>
        </div>
    )
}

export default Main