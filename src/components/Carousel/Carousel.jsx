import React from 'react'

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
                    <h3 className="hero__header mobile">Strong, <br />happy mummas</h3>
                    <h3 className="hero__header desktop">Strong, happy mummas</h3>
                    
                    <div className="hero__content tablet-desktop">
                        <p style={{whiteSpace: "nowrap"}}>At Bump up, we believe that every pregnancy should be a happy pregnancy! We offer programs to help</p>
                        <p style={{whiteSpace: "nowrap"}}>mummas (and daddies) simply enjoy their experience of pregnancy and stay healthy, fit and sorted to </p>
                        <p style={{whiteSpace: "nowrap"}}>make the best of their bump(y) times.</p>
                    </div>

                    <div className="hero__content tablet">
                        <p>At Bump up, we believe that every pregnancy should be a happy pregnancy! We offer programs to help
                        mummas (and daddies) simply enjoy their experience of pregnancy and stay healthy, fit and sorted to
                        make the best of their bump(y) times.</p>
                    </div>

                </div>
            </div>
        </header>
    )
}
}

export default Carousel
