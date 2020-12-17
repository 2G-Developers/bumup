import React,{useState} from 'react'
import { Link } from "react-router-dom";
import {ReactComponent as Bumpup} from '../../static/img/Bump.svg'

const NavbarMobile = () => {
    const [collapse, setCollapse]= useState(false)
    const myUrl = window.location.href;

    const [navbar, setNavbar] = useState(false);

    const scrollBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', scrollBackground)

    return (
        <nav className="navbar-mobile mobile" style={{background: `${ navbar ? '#fff' : 'transparent'}`}}>
            <div className="navbar-mobile__wrapper">

                <Link to="/"><Bumpup className="logo" /></Link> 

                <div className="navbar-mobile__hamburg" onClick={() => setCollapse(prevState => !prevState)}>
                    <div className="navbar-hamburg-bar" style={{background: "#000"}}></div>
                    <div className="navbar-hamburg-bar" style={{background: "#000"}}></div>
                    <div className="navbar-hamburg-bar" style={{background: "#000"}}></div>
                </div>
            </div>

            <div className={`${collapse ? 'navbar-mobile__collapse navbar-mobile__collapse--show': 'navbar-mobile__collapse'}`}>
                <ul className="navbar-mobile__item">
                    <li className={`${myUrl.endsWith("/")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/" className="navbar-mobile__link">Home</Link></li>
                    <li className={`${myUrl.includes("program")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/program" className="navbar-mobile__link">Program</Link></li>
                    <li className={`${myUrl.includes("about")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/about" className="navbar-mobile__link">About</Link></li>
                    <li className={`${myUrl.includes("contact")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/contact" className="navbar-mobile__link">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarMobile
