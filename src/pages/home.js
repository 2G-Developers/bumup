import React from 'react'
import Carousel from './../components/Carousel/Carousel'



import HomeBanner from './../static/img/Home-Banner.png'
import HomeMobile from './../static/img/Mobile-Banner.png'
import Founder from '../components/Founder/Founder'
import Mantra from '../components/Mantra/Mantra'
import OfferSecondary from '../components/Offer/OfferSecondary'
import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile'

function Home() {
  return (
    <div className="App">
            {/* <Navbar class1="navbar-list-active"/> */}
            <NavbarMobile />
            <Carousel images={HomeBanner} altText="Hero" 
                imagesMobile={HomeMobile} />
            <OfferSecondary />

            <Mantra />
            <Founder />
    </div>
  );
}

export default Home;
