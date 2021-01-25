import React from 'react'
import {ReactComponent as Whatsapp} from '../../static/img/whatsapp.svg'
import {ReactComponent as Call} from '../../static/img/Call_Icon.svg'

const Floater = () => {
    return (
        <section id="floater" className="floater">
            <ul className="floater__list">
                <li className="floater__item"><a href="https://api.whatsapp.com/send?phone=918248749487" className="floater__link"><Whatsapp width={{width: "42px"}} /></a></li>
                <li className="floater__item"><a href="tel:+918248749487" className="floater__link"><Call width={{width: "42px"}} height="42px" fill="#fff" strokeWidth="12" /></a></li>
            </ul>
        </section>
    )
}

export default Floater
