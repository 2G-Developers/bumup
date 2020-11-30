import React from 'react'
import {ReactComponent as Bumpup} from '../../static/img/Bump.svg'

const Navbar = () => {
    const navbarStyle = {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        position: "absolute",
        top: "10px",
        left: "10px"
    }

    const topNavbar = {
        position: "relative"
    }

    return (
        <nav id="navbar" className="navbar" style={topNavbar}>
            <div className="navbar-wrapper" style={navbarStyle}>
                <Bumpup className="navbar-logo"/>
            </div>
        </nav>
    )
}

export default Navbar
