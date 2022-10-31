import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import tw from "../images/icon-twitter.svg";
import pi from "../images/icon-pinterest.svg";
import ig from "../images/icon-instagram.svg";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-left">
                    <img className="footer-logo" src={logo} alt="footer-logo"></img>
                    <ul className="footer-menus">
                        <li>
                            <button className="foot-menu">About</button>
                        </li>
                        <li>
                            <button className="foot-menu">Careers</button>
                        </li>
                        <li>
                            <button className="foot-menu">Events</button>
                        </li>
                        <li>
                            <button className="foot-menu">Products</button>
                        </li>
                        <li>
                            <button className="foot-menu">Support</button>
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="icons">
                        <div className="icon-cont">
                            <img className="social-icon" src={fb} alt="social-icon"></img>
                        </div>
                        <div className="icon-cont">
                            <img className="social-icon" src={tw} alt="social-icon"></img>
                        </div>
                        <div className="icon-cont">
                            <img className="social-icon" src={pi} alt="social-icon"></img>
                        </div>
                        <div className="icon-cont">
                            <img className="social-icon" src={ig} alt="social-icon"></img>
                        </div>
                    </div>
                    <div className="copyright">
                        <p className="rights">© 2021 Loopstudios. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;