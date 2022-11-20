import { useState } from 'react'
import './Main.scss'

const Main = () => {
    // const [nombre, set_Nombre] = useState('Raul')
    // const Change = () => {
    //     set_Nombre('Carlos')
    //     console.log(nombre);
    //     // los cambios se realizan al final la funcion 
    // }
    // const [contador, set_aumentar] = useState(0)

    const [num1, set_num1] = useState()
    const [num2, set_num2] = useState()
    const [result, set_result] = useState()
    const sumar = () => {
        set_result(Number(num1) + Number(num2))
    }
    return (
        // <div>
        //     <h1 className='text-center'>Mi nombre es {nombre}</h1>
        //     <button className='mx-auto' onClick={() => set_Nombre('Carlos')}>Change Name</button>
        // </div>
        // <div>
        //     <span className='mx-auto text-center'>{contador}</span>
        //     <button onClick={() => set_aumentar(contador + 1)}>Aumentar</button>
        //     <button onClick={() => set_aumentar(contador - 1)}>Disminuir</button>
        //     <button onClick={() => set_aumentar(0)}>Reset</button>
        // </div>
        <div>
            <input onChange={(e) => { set_num1(e.target.value) }} className='input' type="number" />
            <input onChange={(e) => { set_num2(e.target.value) }} className='input' type="number" />
            <input value={result} className='input' type="number" readOnly />
            <button onClick={() => sumar()} className='btn'>Sumar</button>
        </div>
    )
}

export default Main