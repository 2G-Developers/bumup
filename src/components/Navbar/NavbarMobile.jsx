import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {ReactComponent as Bumpup} from '../../static/img/Bump.svg'

const NavbarMobile = ({isSecondary}) => {
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

    useEffect(() => {
        window.addEventListener('scroll', scrollBackground)
        return () => {
            window.removeEventListener('scroll', scrollBackground)
        }
    }, [])

    

    return (
        <nav className={`${collapse ? 'navbar-mobile navbar-mobile--white': 'navbar-mobile'}`} style={{background: `${ navbar ? '#fff' : 'transparent'}`}} id="nav-mobile">
            <div className="navbar-mobile__wrapper">

                <Link to="/"><Bumpup className="logo" /></Link> 

                <div className="navbar-mobile__hamburg" onClick={() => setCollapse(prevState => !prevState)}>
                    <div className={`${collapse ? "navbar-hamburg-bar navbar-mobile--black": "navbar-hamburg-bar"}`} style={{background: `${navbar || isSecondary ? '#000': '#fff'}`}}></div>
                    <div className={`${collapse ? "navbar-hamburg-bar navbar-mobile--black": "navbar-hamburg-bar"}`} style={{background: `${navbar || isSecondary ? '#000': '#fff'}`}}></div>
                    <div className={`${collapse ? "navbar-hamburg-bar navbar-mobile--black": "navbar-hamburg-bar"}`} style={{background: `${navbar || isSecondary ? '#000': '#fff'}`}}></div>
                </div>
            </div>

            <div className={`${collapse ? 'navbar-mobile__collapse navbar-mobile__collapse--show': 'navbar-mobile__collapse'}`}>
                <ul className="navbar-mobile__item">
                    <li className={`${myUrl.endsWith("/")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/" className="navbar-mobile__link">Home</Link></li>
                    <li className={`${myUrl.includes("program")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/program" className="navbar-mobile__link">What do we offer?</Link></li>
                    <li className={`${myUrl.includes("whybumpup")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/whybumpup" className="navbar-mobile__link">Why Bump up?</Link></li>
                    <li className={`${myUrl.includes("contact")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><Link to="/contact" className="navbar-mobile__link">Get in touch</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarMobile
