import React from 'react';
import BounceBack from '../../static/img/BounceBack.svg';
import BabyReady from '../../static/img/Baby-ready.svg';
import EverythingLabor from '../../static/img/EverythingLabor.svg';
import MummaStrong from '../../static/img/MummaStrong.svg';
import { Link } from "react-router-dom";

const OfferSecondary = () => {
    return (
        <section className="offer">
            <div className="container">
                <div className="row">
                    <div className="offer__header offer__header--signature">
                        <h1>What do we offer?</h1>
                    </div>

                    <div className="offer__container">
                        <div className="offer__text">
                            <p>At Bump up we have custom-fit programs designed for each phase of your pregnancy journey.</p>
                        </div>
                        <div className="offer__text">
                            <p>From the time you start planning for a baby to helping you make your pregnancy a fit, healthy and happy one, getting you all set for labor — and not to forget, helping you bounce back to your pre-baby self!</p>
                        </div>
                        <div className="offer__text">
                            <p>What more? All our programs are designed as virtual sessions giving you the flexibility to attend them from the cozy comfort of your homes!</p>
                        </div>
                        <div className="offer__text">
                            <p>Here's what you can choose from--</p>
                        </div>
                    </div>

                    <div className="offer__card">
                    <Link to="/program" style={{ textDecoration: 'none' }}>
                        <div className="offer__card-body">
                            <div className="offer__card-image">
                                <img src={BabyReady} alt="" className="offer__svg"/>
                            </div>
                            <div className="offer__card-subheading">
                                <h3>Baby-ready</h3>
                            </div>
                            <div className="offer__card-text">
                                <p>A pre-conception workshop</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/program/mummastrong" style={{ textDecoration: 'none' }}>
                        <div className="offer__card-body">
                            <div className="offer__card-image">
                                <img src={MummaStrong} alt="" className="offer__svg"/>
                            </div>
                            <div className="offer__card-subheading">
                                <h3>Mumma-Strong</h3>
                            </div>
                            <div className="offer__card-text">
                                <p>A postnatal fitness program</p>
                            </div>
                        </div>
                        </Link> 
                        <Link to="/program/everythinglabor" style={{ textDecoration: 'none' }}>
                        <div className="offer__card-body">
                            <div className="offer__card-image">
                                <img src={EverythingLabor} alt="" className="offer__svg"/>
                            </div>
                            <div className="offer__card-subheading">
                                <h3>Everything-labor</h3>
                            </div>
                            <div className="offer__card-text">
                                <p>A birth-preparedness workshop</p>
                            </div>
                        </div>
                        </Link>
                        <Link to="/program/bounceback" style={{ textDecoration: 'none' }}>
                        <div className="offer__card-body">
                            <div className="offer__card-image">
                                <img src={BounceBack} alt="" className="offer__svg"/>
                            </div>
                            <div className="offer__card-subheading">
                                <h3>Bounce-Back</h3>
                            </div>
                            <div className="offer__card-text">
                                <p>A postnatal fitness program</p>
                            </div>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OfferSecondary
