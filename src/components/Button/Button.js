import React from 'react';
import './Button.scss';

export default (props) => {
  return (
    <button className="button" disabled={props.disabled} onClick={props.handleClick}><p id="buttonLabel">{props.buttonLabel}</p></button>
  );
}
