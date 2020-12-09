import React from 'react'
import MummaStrongImage from '../../static/img/MummaStrong.svg';

const MummaStrong = () => {
    return (
        <>
            <div className="offer-page__image" style={{marginTop: "2rem"}}>
                <img src={MummaStrongImage} alt="Baby Ready" style={{maxWidth: "450px", width: "100%", height: "450px"}} />
            </div>

            <div className="offer-page__content" style={{marginTop: "2rem"}}>
                <div className="offer-page__wrapper">
                    <div className="offer-page__header">
                        <h1>Mumma-Strong</h1>
                    </div>
                    <div className="offer-page__text offer-page__text-subheading">
                        <p>A prenatal fitness program focused on the total health and wellness of our mummas-to-be — both on the outside and on the inside!</p>
                    </div>
                    <div className="offer-page__text">
                        <p>A fit mom is a happy mom. Plain and simple. Our prenatal fitness program is designed to help our mummas build strength and well-being into their everyday routines. These regular, twice-a-week sessions will focus on preparing you to deal with the demands of pregnancy and labor — physically and mentally. The workouts are tailored to cover identifying your body's uniquer needs, allay pregnancy discomforts, keep weight gain on track, strengthen your body for labor and set the foundation for a smooth postpartum recovery.</p>
                    </div>
                    <div className="offer-page__text">
                        <p>Eating Right-- These session will also cover aspects of nutrition and diet to ensure our moms-to-be are munching on healthy, safe, wholesome food that is crucial for her health as well as the baby's growth and development</p>
                    </div>
                    <div className="offer-page__text">
                        <p>These sessions are high-energy, super fun, and what\'s more? You get to meet other mummas who share the very same things that are making you feel not-so-normal right now. We are all here to help you know that--"You\'ve got this"!</p>
                    </div>
                    <div className="offer-page__text">
                        <p>Our sessions are twice a week.</p>
                    </div>
                    <div className="offer-page__text">
                        <p>Get in touch to know the available batches.</p>
                    </div>
                    <div className="offer-page__text">
                        <a href="index" className="offer-page__button">Enquire now</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MummaStrong
