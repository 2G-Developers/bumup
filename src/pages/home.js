import React from 'react'
import Carousel from './../components/Carousel/Carousel'

import Founder from '../components/Founder/Founder'
import Mantra from '../components/Mantra/Mantra'
import OfferSecondary from '../components/Offer/OfferSecondary'
// import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile'

function Home() {
  return (
    <div className="App">
            {/* <Navbar class1="navbar-list-active"/> */}
            <NavbarMobile />
            <Carousel images="https://res.cloudinary.com/gopal1996/image/upload/v1611745202/Bumpup/Home-Banner_uceivk.webp" altText="Hero" 
                imagesMobile="https://res.cloudinary.com/gopal1996/image/upload/v1611745355/Bumpup/Mobile-Banner_d8o5sh.webp" />
            <OfferSecondary />

            <Mantra />
            <Founder />
    </div>
  );
}

export default Home;
