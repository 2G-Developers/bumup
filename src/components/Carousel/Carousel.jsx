import React from 'react'

function Carousel({images, imagesMobile, altText, heading, subheading, span}) {
    return (
        <header id="hero" className="hero">
            {/*  style={{backgroundImage: `url(${images})`}} */}
            <div className="hero__img">
                <img src={images} className="img-fluid desktop" alt={altText} />
                <img src={imagesMobile} className="img-fluid mobile" alt={altText} />
                <div className="hero__caption">
                    <h3>{heading}</h3>
                    {/* {subheading ? <p>{subheading} <span>{span}</span></p>: null} */}
                    <p>At Bump up, we believe that every pregnancy should be a happy pregnancy! We offer programs to help</p>
                    <p>mummas (and daddies) simply enjoy their experience of pregnancy and stay healthy, fit and sorted to </p>
                    <p>make the best of their bump(y) times.</p>
                </div>
            </div>
        </header>
    )
}

export default Carousel
