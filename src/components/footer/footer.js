import React from "react";
import "./footer.css";

const footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" alt="reactLogo" src="assets/images/react-logo.png"/></span> Clicky Game!</li>
                <li>@ 2018 Vidhi Panchal</li>
                <li><a href="https://github.com/vidhi27/clicky-game" target="blank"><span><img className='logo' alt="github" src="assets/images/github.png"/></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default footer;