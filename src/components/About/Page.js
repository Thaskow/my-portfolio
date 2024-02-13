import React from 'react';
import Experiences from './Experiences'
import ToTop from './ToTop'
import SendMessage from './SendMessage'
import Application from './Applications'
import Techno from './Techno'
import Etudes from './Etudes'
import '../../css/About/About.scss';


function Page () {
  return (
    <div className='about element' id="about">
        <div className="first-part">
            <div className="top-part">
                <Etudes />
                <Techno />
            </div>
            <div className="bottom-part">
                <Application />
                <Experiences />
            </div>
        </div>
        <div className="second-part">
            <ToTop />
            <SendMessage />
        </div>
    </div>
  )
}

export default Page;