import React from 'react';
import './style.scss';

const NabBar = (props) => {
  return (
    <header className="App-header">
      <img id="buttonImg" src="./../images/menu-white.svg" alt="menu" onClick={props.toggleInfo} />
      <h5>International Space Station Location</h5>
    </header>
  );
};

export default NabBar;
