import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";
import nav from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

function Header() {
    function navBar() {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (right.style.visibility === "hidden") {
            right.style.visibility = "visible";
            navImg.src = close;
        } else {
            right.style.visibility = "hidden";
            navImg.style.visibility = "visible";
            navImg.src = nav;
        }
    }

    React.useEffect(() => {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        const headMenus = ["About", "Careers", "Events", "Products", "Support"];
        const headMenus2 = ["ABOUT", "CAREERS", "EVENTS", "PRODUCTS", "SUPPORT"];
        if (window.innerWidth < 1200) {
            navImg.style.visibility = "visible";
            right.style.visibility = "hidden";
            for(let i = 0; i < headMenus2.length; i++) {
                document.getElementsByClassName("menu")[i].innerText = headMenus2[i];
            }
        } else {
            right.style.visibility = "visible";
            navImg.style.visibility = "hidden";
            for(let i = 0; i < headMenus.length; i++) {
                document.getElementsByClassName("menu")[i].innerText = headMenus[i];
            }
        }
        
        function responsiveNav() {
            if (window.innerWidth < 1200) {
                navImg.style.visibility = "visible";
                for(let i = 0; i < headMenus2.length; i++) {
                    document.getElementsByClassName("menu")[i].innerText = headMenus2[i];
                }
            } else {
                right.style.visibility = "visible";
                navImg.style.visibility = "hidden";
                for(let i = 0; i < headMenus.length; i++) {
                    document.getElementsByClassName("menu")[i].innerText = headMenus[i];
                }
            }
        };

        window.addEventListener('resize', responsiveNav);
        
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            let y = 0 + (window.scrollY || window.pageYOffset) / 1000;
            header.style.background = `rgba(0,0,0,${y})`;
        });
    });

    return (
        <>
            <nav className="header">
                <div className="left-header">
                <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="right-header">
                    <ul className="header-menus">
                        <li>
                            <button className="menu"></button>
                        </li>
                        <li>
                            <button className="menu"></button>
                        </li>
                        <li>
                            <button className="menu"></button>
                        </li>
                        <li>
                            <button className="menu"></button>
                        </li>
                        <li>
                            <button className="menu"></button>
                        </li>
                    </ul>
                </div>
            </nav><img src={nav} className="nav-btn" alt="nav" onClick={navBar}/>
        </>
    );
}

export default Header;