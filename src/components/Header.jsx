import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.svg";
import nav from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-menu-close.svg";

function Header() {
    function navBar() {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (right.style.visibility === "hidden") {
            right.style.visibility = "visible";
            navImg.src = close;
            navImg.style.width = "5vw";
        } else {
            right.style.visibility = "hidden";
            navImg.style.visibility = "visible";
            navImg.src = nav;
            navImg.style.width = "9vw";
        }
    }

    React.useEffect(() => {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (window.innerWidth < 1200) {
            navImg.style.visibility = "visible";
            right.style.visibility = "hidden";
        } else {
            right.style.visibility = "visible";
            navImg.style.visibility = "hidden";
        }
        
        function responsiveNav() {
            if (window.innerWidth < 1200) {
                navImg.style.visibility = "visible";
            } else {
                right.style.visibility = "visible";
                navImg.style.visibility = "hidden";
            }
        };

        window.addEventListener('resize', responsiveNav);
    });

    return (
        <>
            <nav className="header">
                <div className="left-header">
                <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="right-header">
                    <div className="opaque"></div>
                    <ul className="header-menus">
                        <li>
                            <button className="menu">Home</button>
                        </li>
                        <li>
                            <button className="menu">New</button>
                        </li>
                        <li>
                            <button className="menu">Popular</button>
                        </li>
                        <li>
                            <button className="menu">Trending</button>
                        </li>
                        <li>
                            <button className="menu">Categories</button>
                        </li>
                    </ul>
                </div>
            </nav><img src={nav} className="nav-btn" alt="nav" onClick={navBar}/>
        </>
    );
}

export default Header;