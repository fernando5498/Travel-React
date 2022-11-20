import React from 'react'
import './Page404.scss'
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div className='Page404 u-paddingSection'>
      <div className="Page404-h">¿You got lost?</div>
      <p className="Page404-p">It's a pleasure to have you on my website, so press the button to continue viewing the site</p>
      <Link to={'/'} className='Button Button--dark'>Get Home</Link>
    </div>
  )
}

export default Page404