import React from "react";
import "./Home.css";
import banner from "../assets/images/image-web-3-mobile.jpg";
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";

import bannerDesk from "../assets/images/image-web-3-desktop.jpg";

function Home() {
    React.useEffect(() => {
        responsiveImgs();
        function responsiveImgs() {
            if (window.innerWidth < 1200) {
                document.querySelector(".banner-img").src = banner;
            } else {
                document.querySelector(".banner-img").src = bannerDesk;
            }
        }
        window.addEventListener('resize', responsiveImgs);
    })

    return (
        <div>
            <div className="container">
                <div className="banner">
                    <img className="banner-img" src="" alt="banner-img"></img>
                </div>
                <div className="bright">
                   <h1 className="bright-title">The Bright Future of Web 3.0?</h1> 
                </div>
                <div className="dive">
                    <p className="dive-text">We dive into the next evolution of the web that claims to put the power of the platforms back 
                    into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className="read-btn">READ MORE</button>
                </div>
                <div className="side">
                    <h1 className="new">New</h1>
                    <h2 className="side-title">Hydrogen VS Electric Cars</h2>
                    <p className="side-text">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr className="side-line"/>
                    <h2 className="side-title">The Downsides of AI Artistry</h2>
                    <p className="side-text">What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr className="side-line"/>
                    <h2 className="side-title">Is VC Funding Drying Up?</h2>
                    <p className="side-text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
                <div className="article art1">
                    <img className="article-img" src={img1} alt="banner-img"></img>
                    <h1 className="number">01</h1>
                    <h2 className="article-title">Reviving Retro PCs</h2>
                    <p className="article-text">What happens when old PCs are given modern upgrades?</p>
                </div>
                <div className="article art2">
                    <img className="article-img" src={img2} alt="banner-img"></img>
                    <h1 className="number">02</h1>
                    <h2 className="article-title">Top 10 Laptops of 2022</h2>
                    <p className="article-text">Our best picks for various needs and budgets.</p>
                </div>
                <div className="article art3">
                    <img className="article-img" src={img3} alt="banner-img"></img>
                    <h1 className="number">03</h1>
                    <h2 className="article-title">The Growth of Gaming</h2>
                    <p className="article-text">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;