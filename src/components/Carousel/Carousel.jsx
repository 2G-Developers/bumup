import React from 'react'
import { Link } from 'react-router-dom'

function Carousel({images, imagesMobile, altText}) {
    const myurl = window.location.href
    if (myurl.indexOf("whybumpup")!==-1)
    {
        return (
        <header id="hero" className="hero">
            <div className="hero__img hero__img--small">
                <img src={images} className="img-fluid hero__img--position-top desktop-carousel" alt={altText} />
                <img src={imagesMobile} className="img-fluid hero__img--position-bottom mobile-carousel" alt={altText} />
                <div className="hero__caption" >
                    <h5 className="hero__header__bumpup mobile">Why Bump up?</h5>
                    <h5 className="hero__header__bumpup desktop">Why Bump up?</h5>

                </div>
            </div>
        </header>)
    } else if(myurl.indexOf("program")!==-1) {
        return (
            <header id="hero" className="hero">
                <div className="hero__img hero__img--small">
                    <img src={images} className="img-fluid hero__img--position-top desktop-carousel" alt={altText} />
                    <img src={imagesMobile} className="img-fluid hero__img--position-bottom mobile-carousel" alt={altText} />
                    <div className="hero__caption" >
                        <h5 className="hero__header__bumpup mobile">What do we offer?</h5>
                        <h5 className="hero__header__bumpup desktop">What do we offer?</h5>
    
                    </div>
                </div>
            </header>)
    }
    else{
    return (
        <header id="hero" className="hero">
            <div className="hero__img">
                <img src={images} className="img-fluid desktop-carousel" alt={altText} />
                <img src={imagesMobile} className="img-fluid mobile-carousel" alt={altText} />
                <div className="hero__caption">
                    <h3 className="hero__header mobile">Making mummas strong and happy<br /></h3>
                    <h3 className="hero__header desktop">Making mummas strong and happy</h3>
                    
                    <div className="hero__content tablet-desktop">
                        <p style={{whiteSpace: "nowrap"}}>We believe that every pregnancy should be a happy pregnancy! At Bump up, we offer prenatal and postnatal programs to help</p>
                        <p style={{whiteSpace: "nowrap"}}>mummas enjoy their experience of pregnancy and stay healthy, fit and confident to </p>
                        <p style={{whiteSpace: "nowrap"}}>make the best of their bump(y) times.</p>
                    </div>

                    <div className="hero__content tablet">
                        <p>We believe that every pregnancy should be a happy pregnancy! At Bump up, we offer prenatal and postnatal programs to help mummas enjoy their experience of pregnancy and stay healthy, fit and confident to make the best of their bump(y) times. </p>
                    </div>

                    <Link to="/contact" className="hero__button">Get in touch</Link>

                </div>
            </div>
        </header>
    )
}
}

export default Carousel
