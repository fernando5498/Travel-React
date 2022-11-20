import './Navbar.scss'
import { Menu_items } from './Menu-items'
import { useState } from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    const [state, setState] = useState(false)
    const handleClick = () => {
        if (state === true) {
            setState(false)
        } else {
            setState(true)
        }
    }
    return (
        <>
            <header className="Header">
                <nav className="Navbar">
                    <NavLink to='/'>
                        <h1 className="Navbar-logo">Logo</h1>
                    </NavLink>

                    <div onClick={handleClick} className='Navbar-burger'>
                        <i className={state === true ? "fas fa-times" : 'fas fa-bars'}></i>
                    </div>

                    <ul className={state === true ? 'Navbar-Nav Nav active' : 'Navbar-Nav Nav'}>
                        {Menu_items.map(link => {
                            return <li key={link.id} className={link.class_name}>
                                <NavLink to={link.url}>
                                    <i className={link.icon}></i>{link.title}
                                </NavLink>
                            </li>
                        })}
                        <NavLink to='/singup' className='Nav-singUp'>Sing Up</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;