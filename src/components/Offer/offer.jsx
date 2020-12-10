import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import BabyReady from './BabyReady';
import BounceBack from './BounceBack';
import EverythingLabor from './EverythingLabor';
import MummaStrong from './MummaStrong';

function Offer({class1='offer-page__card-body-active',class2='offer-page__card-body',class3='offer-page__card-body', class4='offer-page__card-body'}){

    return(
        <Router>
            <section className="offer-page" id="offer-page">
                <div className="container">
                    <div className="row">
                        <div className="offer-page__header">
                            <h1>What do we offer?</h1>
                        </div>

                        <div className="offer-page__container">

                            <div className="offer-page__container">
                                <div className="offer-page__text">
                                    <p>At Bump up we have custom-fit programs designed for each phase of your pregnancy journey.</p>
                                </div>
                                <div className="offer-page__text">
                                    <p>From the time you start planning for a baby to helping you make your pregnancy a fit, healthy and happy one, getting you all set for labor — and not to forget, helping you bounce back to your pre-baby self!</p>
                                </div>
                                <div className="offer-page__text">
                                    <p>What more? All our programs are designed as virtual sessions giving you the flexibility to attend them from the cozy comfort of your homes!</p>
                                </div>
                                <div className="offer-page__text">
                                    <p>Here's what you can choose from--</p>
                                </div>
                            </div>
                        </div>

                        <div className="offer-page__card">
                            <Link to="/program" className={class1}>
                                <div className="offer-page__card-subheading">
                                    <h3>Baby-ready</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A pre-conception workshop</p>
                                </div>
                            </Link>
                            <Link to="/program/mummastrong" className={class2}>
                                <div className="offer-page__card-subheading">
                                    <h3>Mumma-Strong</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A postnatal fitness program</p>
                                </div>
                            </Link>
                            <Link to="/program/everythinglabor" className={class3}>
                                <div className="offer-page__card-subheading">
                                    <h3>Everything-labor</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A birth-preparedness workshop</p>
                                </div>
                            </Link>
                            <Link to="/program/bounceback" className={class4}>
                                <div className="offer-page__card-subheading">
                                    <h3>Bounce-Back</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A postnatal fitness program</p>
                                </div>
                            </Link>
                        </div>

                        <Switch>
                            <Route exact path="/program" component={BabyReady} />
                            <Route path="/program/mummastrong" component={MummaStrong} />
                            <Route path="/program/everythinglabor" component={EverythingLabor} />
                            <Route path="/program/bounceback" component={BounceBack} />
                        </Switch>

                    </div>
                </div>

            </section>
        </Router>
    )
}


export default Offer;