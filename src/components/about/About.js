import React from "react";
import "../../sass/main.scss";
import "./about.scss";
const About = () => {
    return (
        <div id="about">
            <h3 className="heading-3 mb-m section-head">About -</h3>
            <div className="aboutContainer">
                <div className="aboutme">
                    <p>
                        I am Adejare, a frontend developer based in Lagos,
                        Nigeria focused on creating interactive and immersive
                        digital experiences on the web. I'm currently a student
                        of Computer Engineering in the Federal University of
                        Technology Akure. I am passionate about creating digital
                        products that makes people experience everday life and
                        not endure it.{" "}
                    </p>
                    <div className="btn">
                    <a className="mb-s">View Projects</a>
                    <a>Contact Me</a>
                    </div>
                </div>
                <div className="aside">
                    <div className="stack">
                        <h4 className="heading-4 mb-s sec-color">Stack.</h4>
                        <p>I work well with some of the most efficient technologies. Some are  </p>
                        <ul className="mb-m">
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>REACT</li>
                            <li>GSAP</li>
                            <li>FRAMER MOTION</li>
                            <li>TAILWIND CSS</li>
                        </ul>
                       
                    </div>
                    <div className="icebreakers">
                        <h4 className="heading-4 mb-s sec-color">Icebreakers.</h4>
                        <p className="mb-l">
                            I listen to Alt and Nigerian music all the time,
                            here's my <a>PROFILE</a> on spotify. I love
                            traveling, taking pictures, meeting new people ad
                            trying new foods. (work with me so i can fund this).
                            GET IN TOUCH to know more about me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;