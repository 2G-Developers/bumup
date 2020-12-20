import React from 'react'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile';
const contactPage = () => {
    return (
        <div className="App">
            
            <Navbar class3="navbar-list-active" isSecondary={true} />
            <NavbarMobile isSecondary={true} />
            <Contact />
        </div>
    )
}

export default contactPage
