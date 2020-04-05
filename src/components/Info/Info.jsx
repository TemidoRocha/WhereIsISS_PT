import React from 'react';
import './style.scss';

function Info(props) {
  return (
    <ul className="InfoUl">
      <li>lat: {props.lat}</li>
      <li>lng: {props.lng}</li>
      <li>altitude: {props.altitude}</li>
      <li>velocity: {props.velocity}</li>
      <li>visibility: {props.visibility}</li>
      <li>footprint: {props.footprint}</li>
      <li>timestamp: {props.timestamp}</li>
      <li>daynum: {props.daynum}</li>
      <li>solar_lat: {props.solar_lat}</li>
      <li>solar_lon: {props.solar_lon}</li>
      <li>units: {props.units}</li>
    </ul>
  );
}

export default Info;
