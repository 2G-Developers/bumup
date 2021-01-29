import React from 'react'
import Contact from '../components/Contact/Contact'
import NavbarMobile from '../components/Navbar/NavbarMobile';
import {Helmet} from 'react-helmet'

const contactPage = () => {
    return (
        <div className="App" >
            
            <Helmet>
              <title>Bumpup | Contact</title>
              <meta name="title" content="Bumpup | Contact" />

              <meta property="og:title" content="Bumpup | Contact" />

              <meta property="twitter:title" content="Bumpup | Contact" />
            </Helmet>
            <NavbarMobile isSecondary={true} />
            <Contact />
        </div>
    )
}

export default contactPage
