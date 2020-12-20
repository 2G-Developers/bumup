import React from 'react'


import {ReactComponent as Facebook} from '../../static/img/facebook.svg'
import {ReactComponent as Instagram} from '../../static/img/instagram.svg'
import {ReactComponent as Linkedin} from '../../static/img/linkedin.svg'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="enquiry__medium">
                        <div className="footer__wrapper">
                            <span className="footer__text">© 2020 Go Sociobutterfly. All rights reserved.</span>

                            <ul className="footer__nav">
                                <li className="footer__item footer__item--icon">
                                    <a href="https://instagram.com/bumpup_?igshid=1wgiggwhfvg7h" target="_blank" rel="noreferrer" className="footer__link">
                                        <Instagram width="1rem" height="1rem" fill="#fff" />
                                    </a>
                                </li>
                                <li className="footer__item footer__item--icon">
                                    <a href="https://www.facebook.com/Bump-up-111933150718570/" target="_blank" rel="noreferrer" className="footer__link">
                                        <Facebook width="1rem" height="1rem" fill="#fff" />
                                    </a>
                                </li>
                                {/* <li className="footer__item footer__item--icon">
                                    <a href="https://www.linkedin.com/company/go-socialbutterfly" target="_blank" rel="noreferrer" className="footer__link">
                                        <Linkedin width="1rem" height="1rem" fill="#fff" />
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
