import React from 'react';
import './logoSection.css';
import sym from './KILLABYTEZ.png';

import logo1 from './logo4.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';

import {MIDDLE_SECTION} from '../../Module/General';

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
      <h2>{MIDDLE_SECTION.HOSTED_BY}</h2>
      <iframe
        width="560"
        height="315"
        src={MIDDLE_SECTION.YOUTUBE_LINK}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img className="Logo sym" src={sym} alt="Killabytez Hacks" />
        <img className="Logo logo1" src={logo1} alt="Killabytez Hacks" />
        <img className="Logo logo2" src={logo2} alt="Killabytez Hacks" />
        <img className="Logo logo3" src={logo3} alt="Killabytez Hacks" />
      </div>
    );
  } else {
    myLogo = (
      <div className="logoS">
        <img className="Logo sym" src={sym} alt="Limbohacks" />
        <img className="Logo logo1" src={logo1} alt="Limbohacks" />
      </div>
    );
  }
  return myLogo;
}

export {Logo, LogoSectionAbout};
