import React ,{ useState , useEffect ,  useRef  } from 'react'
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import BabyReady from './BabyReady';
import BounceBack from './BounceBack';
import EverythingLabor from './EverythingLabor';
import MummaStrong from './MummaStrong';

import ProgramBanner from '../../static/img/What-do-we-offer-banner.jpg'
import ProgramMobile from '../../static/img/Mobile-Banner-4.jpg'

// const scrollToRef = (ref) => {window.scrollTo(0, ref.current.offsetTop) ;alert(ref.current.offsetTop)  }
function ComponentDidMount(mobref,desktopref) {
    
        useEffect(() => {
            if(window.location.pathname === '/program') {
                window.scrollTo(0, 0);
            }
            else {
                if (mobref.current && mobref.current.offsetTop)
                {
                    window.scrollTo(0, mobref.current.offsetTop - document.getElementById("nav-mobile").clientHeight + document.querySelector("#hero").clientHeight)  ;
                    
                }
                else{
                    window.scrollTo(0, desktopref.current.offsetTop - document.getElementById("nav-mobile").clientHeight + document.querySelector("#hero").clientHeight) ;
                 
                }
            }
           
        }, [mobref,desktopref]);

 
    return null;
  }
  
function Offer({class1='offer-page__card-body',class2='offer-page__card-body',class3='offer-page__card-body', class4='offer-page__card-body'}){
    const myurl = window.location.href
    const desktopref= useRef('desktop')
    
    const mybaby= useRef('baby')
    const mymumma= useRef('mumma')
    const mylabor= useRef('labor')
    const mybounce= useRef('bounce')
    let myphone;

    if (myurl.indexOf("mummastrong")!==-1)
    {
        class2='offer-page__card-body-active'
        myphone = mymumma;
    }
    else if (myurl.indexOf("everythinglabor")!==-1)
    {
        class3='offer-page__card-body-active'
        myphone = mylabor;

    }        
    else if (myurl.indexOf("bounceback")!==-1)
    {
        class4='offer-page__card-body-active'
        myphone = mybounce;

    }   
   else{
    class1 ='offer-page__card-body-active'
    myphone = mybaby;

   }
   ComponentDidMount(myphone,desktopref)
    const [state,setclassstate ] = useState({class1state:class1,class2state:class2,class3state:class3,class4state:class4});
    const defaultclass = 'offer-page__card-body'
    const activeclass = 'offer-page__card-body-active'
function update_active(i)
{
            

    if (i === 1)
    {
        setclassstate({class1state:activeclass,class2state:defaultclass,class3state:defaultclass,class4state:defaultclass})
    }
    if (i === 2)
    {
        setclassstate({class1state:defaultclass,class2state:activeclass,class3state:defaultclass,class4state:defaultclass})
    }        
    if (i === 3)
    {
        setclassstate({class1state:defaultclass,class2state:defaultclass,class3state:activeclass,class4state:defaultclass})
    } 
    if (i === 4)
    {
        setclassstate({class1state:defaultclass,class2state:defaultclass,class3state:defaultclass,class4state:activeclass})
    }
}
    

    return(
        <Router>
            <>
            <Carousel images={ProgramBanner} altText="Hero" 
                imagesMobile={ProgramMobile} />
            <section className="offer-page" id="offer-page">
                <div className="container desktop">
                    <div className="row">
                        {/* <div className="offer-page__header offer-page__header--signature">
                            <h1 style={{fontSize: "3.75rem"}}>What do we offer?</h1>
                        </div> */}

                        <div className="offer-page__container"  >

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
                                <div className="offer-page__text" >
                                    <p>Here's what you can choose from--</p>
                                </div>
                            </div>
                        </div>

                        <div className="offer-page__card"  ref={desktopref}>
                            <Link to="/program/babyready" className={state.class1state} onClick={() =>update_active(1)} >
                                <div className="offer-page__card-subheading" >
                                    <h3>Baby-ready</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A pre-conception workshop</p>
                                </div>
                            </Link>
                            <Link to="/program/mummastrong" className={state.class2state} onClick={() =>update_active(2)}>
                                <div className="offer-page__card-subheading">
                                    <h3>Mumma-Strong</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A postnatal fitness program</p>
                                </div>
                            </Link>
                            <Link to="/program/everythinglabor" className={state.class3state} onClick={() =>update_active(3)}>
                                <div className="offer-page__card-subheading">
                                    <h3>Everything-labor</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A birth-preparedness workshop</p>
                                </div>
                            </Link>
                            <Link to="/program/bounceback" className={state.class4state} onClick={() =>update_active(4)}>
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
                            <Route path="/program/babyready" component={BabyReady} />
                            <Route path="/program/mummastrong" component={MummaStrong} />
                            <Route path="/program/everythinglabor" component={EverythingLabor} />
                            <Route path="/program/bounceback" component={BounceBack} />
                        </Switch>

                    </div>
                </div>
                <div className="container mobile">
                    <div className="row">
                        {/* <div className="offer-page__header offer-page__header--signature">
                            <h1 style={{fontSize: "3.75rem"}}>What do we offer?</h1>
                        </div> */}

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

                        <div className="offer-page__card"   >
                            <Link to="/program/babyready" className={state.class1state} onClick={() =>update_active(1)}>
                                <div className="offer-page__card-subheading">
                                    <h3>Baby-ready</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A pre-conception workshop</p>
                                </div>
                            </Link>

                        <div ref={mybaby}>
                            <Switch>
                                <Route exact path="/program/babyready" component={BabyReady}/>
                            </Switch>
                        </div>
                            <Link to="/program/mummastrong" className={state.class2state} onClick={() =>update_active(2)}>
                                <div className="offer-page__card-subheading">
                                    <h3>Mumma-Strong</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A postnatal fitness program</p>
                                </div>
                            </Link>
                        <div ref={mymumma}>
                            <Switch>
                                <Route path="/program/mummastrong" component={MummaStrong}  />
                            </Switch>
                        </div>
                            <Link to="/program/everythinglabor" className={state.class3state} onClick={() =>update_active(3)} >
                                <div className="offer-page__card-subheading">
                                    <h3>Everything-labor</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A birth-preparedness workshop</p>
                                </div>
                            </Link>
                        <div ref={mylabor}>
                            <Switch>
                                <Route path="/program/everythinglabor" component={EverythingLabor} ref={mybaby}/>
                            </Switch>
                        </div>
                            <Link to="/program/bounceback" className={state.class4state} onClick={() =>update_active(4)}>
                                <div className="offer-page__card-subheading">
                                    <h3>Bounce-Back</h3>
                                </div>
                                <div className="offer-page__card-text">
                                    <p>A postnatal fitness program</p>
                                </div>
                            </Link>
                            <div ref={mybounce}>
                                <Switch>
                                    <Route path="/program/bounceback" component={BounceBack} />
                                </Switch>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            </>
        </Router>
    )
}


export default Offer;