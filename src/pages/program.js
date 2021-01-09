import React from 'react'
import Offer from '../components/Offer/offer'
// import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile';
import Carousel from '../components/Carousel/Carousel';



const program = () => {
    return (
        <div className="App">
            {/* <Navbar class2="navbar-list-active" isSecondary={true} /> */}
            <NavbarMobile isSecondary={true} />
            
            <Offer />
        </div>
    )
}

export default program
