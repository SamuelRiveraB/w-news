import React from "react";
import "./Home.css";
import banner from "../images/mobile/image-hero.jpg";
import firstLeft from "../images/mobile/image-interactive.jpg";
import gallery1 from "../images/mobile/image-deep-earth.jpg";
import gallery2 from "../images/mobile/image-night-arcade.jpg";
import gallery3 from "../images/mobile/image-soccer-team.jpg";
import gallery4 from "../images/mobile/image-grid.jpg";
import gallery5 from "../images/mobile/image-from-above.jpg";
import gallery6 from "../images/mobile/image-pocket-borealis.jpg";
import gallery7 from "../images/mobile/image-curiosity.jpg";
import gallery8 from "../images/mobile/image-fisheye.jpg";

import bannerDesk from "../images/desktop/image-hero.jpg";
import firstLeftDesk from "../images/desktop/image-interactive.jpg";
import gallery1Desk from "../images/desktop/image-deep-earth.jpg";
import gallery2Desk from "../images/desktop/image-night-arcade.jpg";
import gallery3Desk from "../images/desktop/image-soccer-team.jpg";
import gallery4Desk from "../images/desktop/image-grid.jpg";
import gallery5Desk from "../images/desktop/image-from-above.jpg";
import gallery6Desk from "../images/desktop/image-pocket-borealis.jpg";
import gallery7Desk from "../images/desktop/image-curiosity.jpg";
import gallery8Desk from "../images/desktop/image-fisheye.jpg";

function Home() {
    React.useEffect(() => {
        responsiveImgs();
        function responsiveImgs() {
            if (window.innerWidth < 1200) {
                document.querySelector(".banner").style.backgroundImage = 'url(' + banner + ')';
                document.querySelector(".first-left-img").src = firstLeft;
                document.querySelector(".gall1").src = gallery1;
                document.querySelector(".gall2").src = gallery2;
                document.querySelector(".gall3").src = gallery3;
                document.querySelector(".gall4").src = gallery4;
                document.querySelector(".gall5").src = gallery5;
                document.querySelector(".gall6").src = gallery6;
                document.querySelector(".gall7").src = gallery7;
                document.querySelector(".gall8").src = gallery8;
            } else {
                document.querySelector(".banner").style.backgroundImage = 'url(' + bannerDesk + ')';
                document.querySelector(".first-left-img").src = firstLeftDesk;
                document.querySelector(".gall1").src = gallery1Desk;
                document.querySelector(".gall2").src = gallery2Desk;
                document.querySelector(".gall3").src = gallery3Desk;
                document.querySelector(".gall4").src = gallery4Desk;
                document.querySelector(".gall5").src = gallery5Desk;
                document.querySelector(".gall6").src = gallery6Desk;
                document.querySelector(".gall7").src = gallery7Desk;
                document.querySelector(".gall8").src = gallery8Desk;
            }
        }
        window.addEventListener('resize', responsiveImgs);
    })

    return (
        <div>
            <div className="container">
                <div className="banner">
                    <div className="square">
                        <h1 className="immersive">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                    </div>
                </div>
                <div className="first-cont">
                    <div className="first-left">
                        <img className="first-left-img" src="" alt="first-left-img"></img>
                    </div>
                    <div className="first-right">
                        <h2 className="leader-title">THE LEADER IN INTERACTIVE VR</h2>
                        <p className="leader-text">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the 
                            best companies around the globe. Our award-winning creations have transformed businesses through 
                            digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>
                <h1 className="creations">OUR CREATIONS</h1>
                <div className="second-cont">
                    <div className="gallery">
                        <img className="gallery-img gall1" src="" alt="gallery1-img"></img>
                        <h2 className="gallery-title">DEEP EARTH</h2>
                    </div>
                    <div className="gallery">
                        <img className="gallery-img gall2" src="" alt="gallery2-img"></img>
                        <h2 className="gallery-title">NIGHT ARCADE</h2>
                    </div>
                    <div className="gallery">
                        <img className="gallery-img gall3" src="" alt="gallery3-img"></img>
                        <h2 className="gallery-title">SOCCER TEAM VR</h2>
                    </div>
                    <div className="gallery">
                        <img className="gallery-img gall4" src="" alt="gallery4-img"></img>
                        <h2 className="gallery-title grid">THE GRID</h2>
                    </div>
                    <div className="gallery">
                        <img className="gallery-img gall5" src="" alt="gallery5-img"></img>
                        <h2 className="gallery-title">FROM UP ABOVE VR</h2>
                    </div>
                    <div className="gallery">
                        <img className="gallery-img gall6" src="" alt="gallery6-img"></img>
                        <h2 className="gallery-title">POCKET BOREALIS</h2>
                    </div>
                    <div className="gallery">
                        <img className="gallery-img gall7" src="" alt="gallery7-img"></img>
                        <h2 className="gallery-title">THE CURIOSITY</h2>
                    </div>
                    <div className="gallery">
                        <img className="gallery-img gall8" src="" alt="gallery8-img"></img>
                        <h2 className="gallery-title">MAKE IT FISHEYE</h2>
                    </div>
                </div>
                <div className="see-btn">
                    <h2 className="see-text">SEE ALL</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;