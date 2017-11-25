import React from 'react';
import ReactSVG from 'react-svg';
import logo from '../../images/logo-banner2.svg'
import './Logo.scss';

export default (props) => {
  return (
    <div className="logoContainer">
      <ReactSVG path={logo}/>
      <h1 className="logoHeader">{props.headerLabel}</h1>
    </div>
  );
}
