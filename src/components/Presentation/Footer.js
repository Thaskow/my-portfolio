import React from 'react';
import linkedinLOGO from '../../assets/images/logo-linkedin.png';
import githubLOGO from '../../assets/images/logo-github.png';
import scrollDown from '../../assets/images/scroll-down.png';

function Footer() {

    function scrollToAbout() {
        const about = document.getElementById('about');
        about.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="footer-content">
            <div className="job-social">
                <div className="job">Développeur <br/> Full stack</div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/lucas-surma-6861b1193/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLOGO} alt=""/>
                    </a>
                    <a href="https://github.com/thaskow" target="_blank" rel="noopener noreferrer">
                        <img src={githubLOGO} alt=""/>
                    </a>
                    <a onClick={scrollToAbout} className="about-me">A propos</a>
                </div>
            </div>
            <div className="myself-scroll">
                <div className="text">Passionné de développement et de réseaux, mon désir insatiable d'apprendre m'inspire à constamment élargir mes compétences et à créer des solutions technologiques innovantes.</div>
                <div className="scroll">
                    <div className="image-scroll">
                        <img src={scrollDown} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;