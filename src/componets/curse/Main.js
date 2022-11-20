

import './Main.scss'

const Main = () => {
    const reyes = [
        {
            nombre: "Atanagildo",
            reinado: 15,
            vacasComidas: 9,
            img: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c32a.png'
        }, {
            nombre: "Ervigio",
            reinado: 7,
            vacasComidas: 3,
            img: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c32a.png'
        }, {
            nombre: "Ataúlfo",
            reinado: 5,
            vacasComidas: 16,
            img: 'https://imagenpng.com/wp-content/uploads/2016/09/Pikachu-png-0.png'

        }, {
            nombre: "Leovigildo",
            reinado: 18,
            vacasComidas: 3,
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1310854-a38d-4337-9fe2-03166791c779/d4svkip-b9d30c5d-0cc4-4899-8f64-e45ee50d054a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMzEwODU0LWEzOGQtNDMzNy05ZmUyLTAzMTY2NzkxYzc3OVwvZDRzdmtpcC1iOWQzMGM1ZC0wY2M0LTQ4OTktOGY2NC1lNDVlZTUwZDA1NGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ffrOqT8AYrbo4i9SJsrcUkZ3VjhsUTjx0stkrKrgew0'

        }, {
            nombre: "Sisebuto",
            reinado: 9,
            vacasComidas: 13,
            img: 'https://down.imgspng.com/download/0720/pokemon_PNG52.png'

        }, {
            nombre: "Recesvinto",
            reinado: 19,
            vacasComidas: 11,
            img: 'https://e1.pngegg.com/pngimages/1014/646/png-clipart-goku-ssj-blue-blue-super-saiyan-son-goku.png'
        }, {
            nombre: "Teodorico",
            reinado: 33,
            vacasComidas: 12,
            img: 'https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png'
        }
    ]
    const filter = reyes.filter(rey => rey.reinado >= 10 && rey.vacasComidas >= 10)
    const sumar = (e) => {
        e.target.value = Number(e.target.value) + 1
    }
    return (
        <div className="container">
            <div className="grid">
                {filter.map(rey => {
                    return <div key={rey.nombre}>
                        <h2 >{rey.nombre}</h2>
                        <input onClick={sumar} type="number" value={0} readOnly />
                    </div>
                }
                )}

            </div>
        </div>
    )
}

export default Main