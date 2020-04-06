import React from 'react';
import './style.scss';

const NabBar = (props) => {
  return (
    <header className="App-header">
      <img id="buttonImg" src="./../images/menu-white.svg" alt="menu" onClick={props.toggleInfo} />
      <h5>International Space Station</h5>
      <p onClick={props.toggleTrace}>on/off</p>
    </header>
  );
};

export default NabBar;
