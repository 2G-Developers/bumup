// import React from 'react'
import {ReactComponent as Bumpup} from '../../static/img/Bump.svg'

// const Navbar = () => {
//     const navbarStyle = {
//         display: "flex",
//         justifyContent: "flex-start",
//         width: "100%",
//         position: "absolute",
//         top: "10px",
//         left: "10px"
//     }

//     const topNavbar = {
//         position: "relative"
//     }

//     return (
//         <nav id="navbar" className="navbar" style={topNavbar}>
//             <div className="navbar-wrapper" style={navbarStyle}>
//                 <Bumpup className="navbar-logo"/>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

import React , { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar({isSecondary,class1="navbar-list", class2="navbar-list", class3="navbar-list",class4="navbar-list",color='#fff'}){
    const [showNav,setShownav ] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(

    <div className="nav">

    <div className={navbar ? 'navbar active-nav': 'navbar'} style={{background: `${ navbar ? color : 'transparent'}`}}>
        {isSecondary ? null : <Link to="/"><Bumpup className="logo" /></Link> }
        {/* {isSecondary ? <Link to="/"><img className="logo" src={logo2} alt="logo"/></Link> : null } */}
        <div className="navbar-hamburg" onClick={()=>setShownav(!showNav)}>
            <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
            <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
            <div className="navbar-hamburg-bar" style={{background: `${isSecondary ? '#fff': '#000'}`}}></div>
        </div>
    </div>  
    <div className="navbar-page" style={{display: showNav ? 'block' : 'none' }}>
        <div id="mdiv" onClick={()=>setShownav(!showNav)}>
            <div className="mdiv">
                 <div className="md"></div>
             </div>
        </div>
        <div className="navbar-content">
            <Link to="/" className={class1}>Home</Link>
            <Link to="/program" className={class2}>Program</Link>
            <Link to="/whybumpup" className={class4}>About</Link>
            <Link to="/contact" className={class3}>Contact</Link>

        </div>
    </div>
    </div>)
}
export default Navbar
