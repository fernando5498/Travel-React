import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.scss'

const Footer = () => {
    return (
        <div className="Footer u-paddingSection">
            <div className="Footer-top">
                <div className='Footer-top-logo'>
                    <NavLink to='/'>
                        <h2 className='Footer-top-logo-h'>Trippy</h2>
                    </NavLink>
                    <p className='Footer-top-logo-p'>Choose your favourite destination.</p>
                </div>
                <ul className='Footer-redes'>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/"><i className='fa-brands fa-facebook-square'></i></a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/"><i className='fa-brands fa-instagram-square'></i></a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href="https://www.behance.net/gallery/84249271/Discovery-Land-Company-Website?tracking_source=search_projects_recommended%7Chotel"><i className='fa-brands fa-behance-square'></i></a>
                    </li>
                    <li>
                        <a target='_blank' rel='noopener noreferrer' href="https://twitter.com/?lang=es"><i className='fa-brands fa-twitter-square'></i></a>
                    </li>
                </ul>
            </div>
            <div className="Footer-bottom">
                <div>
                    <h5 className='Footer-bottom-title'>Project</h5>
                    <ul>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">License</a></li>
                        <li><a href="#">All Versions</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className='Footer-bottom-title'>Community</h5>
                    <ul>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Issues</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className='Footer-bottom-title'>Help</h5>
                    <ul>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Troubleshooting</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className='Footer-bottom-title'>Others</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">License</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer