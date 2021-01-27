import React from 'react'
import Offer from '../components/Offer/offer'
import {Helmet} from 'react-helmet'
import NavbarMobile from '../components/Navbar/NavbarMobile';



const program = () => {
    return (
        <div className="App">
            <Helmet>
              <title>Bumpup | Program</title>
              <meta name="title" content="Bumpup | Program" />

              <meta property="og:title" content="Bumpup | Program" />

              <meta property="twitter:title" content="Bumpup | Program" />
            </Helmet>
            <NavbarMobile isSecondary={true} />
            
            <Offer />
        </div>
    )
}

export default program
