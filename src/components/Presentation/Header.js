import React from 'react';

function Header() {
  return (
    <div className="header-content">
        <div className="my">Lucas.</div>
        <div className="lets-talk">
            <a className="lets-talk-button" href="mailto:contact@lucas-surma.fr">
                <div className="text">Parlons</div>
                <div className="rond"></div>
            </a>
        </div>
    </div>
  );
}

export default Header;