import React from 'react'
import Offer from '../components/Offer/offer'
import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile';

const program = () => {
    return (
        <div className="App">
            <Navbar class2="navbar-list-active"/>
            <NavbarMobile />
            <Offer />
        </div>
    )
}

export default program
