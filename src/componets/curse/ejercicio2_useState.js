import './Main.scss'
import { useState } from 'react'
const Main = () => {
    const cambios = [
        {
            moneda: "Euro",
            cambio: 1,
        }, {
            moneda: "Peso argentino",
            cambio: 118.6,
        }, {
            moneda: "Peso colombiano",
            cambio: 4543.5,
        }, {
            moneda: "Peso mexicano",
            cambio: 23.2,
        }, {
            moneda: "Dólar",
            cambio: 1.14
        }
    ]
    const [argentino, setArg] = useState(0)
    const [colombiano, setCol] = useState()
    const [mexicano, setMex] = useState()
    const [dolar, setDol] = useState()

    const change = (e) => {
        console.log(e.target.value * cambios[1].cambio);
        setArg(e.target.value * cambios[1].cambio)
        setCol(e.target.value * cambios[2].cambio)
        setMex(e.target.value * cambios[3].cambio)
        setDol(e.target.value * cambios[3].cambio)
    }
    return (
        <>
            <div className='d-flex flex-column'>
                <label htmlFor="euro">Euro</label>
                <input onChange={change} id="euro" type="number" />

                <label htmlFor="argentino">Pesos Argentinos</label>
                <input value={argentino} id="argentino" readOnly type="number" />

                <label htmlFor="colombiano">Pesos Colombiano</label>
                <input value={colombiano} id="colombiano" readOnly type="number" />

                <label htmlFor="mexicano">Pesos Mexicano</label>
                <input value={mexicano} id="mexicano" readOnly type="number" />

                <label htmlFor="dolar">Dolar</label>
                <input value={dolar} id="dolar" readOnly type="number" />
            </div>
        </>
    )
}

export default Main;