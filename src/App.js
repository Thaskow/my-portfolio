import React, {useEffect} from 'react';
import About from './components/About/Page';
import Presentation from './components/Presentation/Page';
import Projet from './components/Project/Page';
import './css/App.scss';

function App() {

    // change title
    document.title = "Lucas. - Développeur Web & App"




    const pageHeight = document.documentElement.scrollHeight;
    const elements = document.getElementsByClassName('element');
    let counter = 0;
    let scrollValue = 0;
    const sizeElement = [];
    let scrollDir = 'up';

    const changeOpacity = (elements, index) => {
        elements[index].style.opacity = 0.1;
        setTimeout(() => {
            elements[index].style.opacity = 1;
        }, 500);
    }

    const handleScroll = (event) => {

        //calcule vitesse de scroll
        const speed = Math.abs((window.scrollY - scrollValue) / 100);

        // console.log(speed)


        if (speed < 2) {
            // Récupération de la direction du scroll
            // console.log(event);
            scrollDir = scrollValue > window.scrollY ? 'up' : 'down';

            // Taille des éléments
            for (let i = 0; i < elements.length; i++) {
                sizeElement[i] = [pageHeight * i, pageHeight * (i + 1)];
            }

            // if navigator page width is over 1200px
            if (window.innerWidth > 800) {
                if (sizeElement[counter][1] > window.scrollY && sizeElement[counter][0] < window.scrollY) {
                    if (scrollDir === 'down') {
                        if (window.scrollY > sizeElement[counter][1] - (pageHeight / 4)) {
                            window.scrollTo(0, sizeElement[counter][1]);
                            changeOpacity(elements, counter);
                        }
                    } else {
                        if (window.scrollY < sizeElement[counter][0] + (pageHeight / 4)) {
                            window.scrollTo(0, sizeElement[counter][0]);
                            changeOpacity(elements, counter + 1);
                        }
                    }
                } else if (sizeElement[counter][1] <= window.scrollY) {
                    counter++;
                } else if (sizeElement[counter][0] >= window.scrollY) {
                    counter--;
                }
                // remove other elements active class
                if (counter < 0) {
                    counter++;
                }
            }
        }
            // Changment de la valeur actuel du scroll
        scrollValue = window.scrollY;
    }


    useEffect(() => {
        // Add the scroll event listener to the window
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <div className="portfolio">
            <Presentation/>
            <Projet/>
            <About/>
        </div>
    );
}

export default App;
