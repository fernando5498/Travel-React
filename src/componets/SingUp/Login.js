import React from 'react'
import './Login.scss'
const Login = () => {
    return (
        <div className='Login u-paddingSection'>
            <form className='Login-form' action="">
                <div className='Login-form-icon'><i className="fa-solid fa-user"></i></div>
                <input className='inputLogin' type="text" placeholder='User Name' />
                <input className='inputLogin' type="password" placeholder='Password' />
                <button className='Button Button--dark'>Sing Up</button>
            </form>
        </div>
    )
}

export default Login