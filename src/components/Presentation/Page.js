import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/Presentation/Presentation.scss';


function Page () {


    return (
        <div className="presentation element">
            <div className="shapes"></div>
            <div className="presentation-content">
            <div className="header">
                <Header />
            </div>
            <div className="footer">
                <Footer />
            </div>
            </div>
        </div>
    )
}

export default Page;