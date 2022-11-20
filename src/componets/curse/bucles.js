
import './Main.scss'

const Main = () => {
    const reyes = [
        {
            nombre: "Atanagildo",
            color: "darkolivegreen",
            precio: 178,
            img: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c32a.png'
        }, {
            nombre: "Ervigio",
            color: "crimson",
            precio: 169,
            img: 'https://imagenpng.com/wp-content/uploads/2016/09/Pikachu-png-0.png'
        }, {
            nombre: "Ataúlfo",
            color: "peru",
            precio: 81,
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1310854-a38d-4337-9fe2-03166791c779/d4svkip-b9d30c5d-0cc4-4899-8f64-e45ee50d054a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMzEwODU0LWEzOGQtNDMzNy05ZmUyLTAzMTY2NzkxYzc3OVwvZDRzdmtpcC1iOWQzMGM1ZC0wY2M0LTQ4OTktOGY2NC1lNDVlZTUwZDA1NGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ffrOqT8AYrbo4i9SJsrcUkZ3VjhsUTjx0stkrKrgew0'
        }, {
            nombre: "Leogivildo",
            color: "darkmagenta",
            precio: 126,
            img: 'https://down.imgspng.com/download/0720/pokemon_PNG52.png'
        }, {
            nombre: "Recesvinto",
            color: "royalblue",
            precio: 141,
            img: 'https://e1.pngegg.com/pngimages/1014/646/png-clipart-goku-ssj-blue-blue-super-saiyan-son-goku.png'
        }, {
            nombre: "Sisebuto",
            color: "teal",
            precio: 69,
            img: 'https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png'
        }
    ]
    // filter crea un nuevo array en base al filtro o condicion especificado
    const nuevosReyes = reyes.filter(item => item.precio <= 100)
    // find regresa el primer elemento que coincida con el filtro espeficicado
    const nuevosReyes2 = reyes.find(item => item.precio <= 100)
    console.log(nuevosReyes2);
    // include, no es un bucle pero es un metodo para verificar si un elemento obtiene un elemento 
    const nuevosReyes3 = reyes.find(item => item.nombre.includes('v'))
    console.log(nuevosReyes3)
    return (

        <div>
            {nuevosReyes.map((item, i) => <h1 key={i}>{item.nombre}</h1>)}
        </div>
    )
}

export default Main