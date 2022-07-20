import React from 'react';
import './sponsors.scss';
import {Btn} from '../Top-division-components/Top-division-components.jsx';
import {SOCIALS} from '../../Module/General';

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function SponsorsGold() {
  return (
    <div>
      <h1 className='gold'> Gold Sponsors </h1>
      <br></br>
    </div>
  );
}

function SponsorsSilver() {
  return (
    <div>
      <h1 className='silver'> Silver Sponsors </h1>
      <br></br>
    </div>
  );
}

function SponsorsBronze() {
  return (
    <div>
      <h1 className='bronze'> Bronze Sponsors </h1>
      <br></br>
    </div>
  );
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Killabytez Hacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring </h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>{' '}
    </div>
  );
}

export {
  SponsorsHead,
  Sponsor,
  SponsorUS,
  SponsorsBronze,
  SponsorsSilver,
  SponsorsGold
};
