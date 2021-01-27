import React from 'react';
import mantraImg from '../../static/img/mantra_image.jpg'

const Mantra = () => {
    return (
        <section className="mantra" id="mantra" style={{backgroundImage: `url(${mantraImg})`}}>
            <div className="container">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="mantra__wrapper">
                    <h1 className="mantra__primary">Our mantra</h1>
                    <h2 className="mantra__secondary">Strong, happy mummas = strong, happy babies</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mantra
