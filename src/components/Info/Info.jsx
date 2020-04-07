import React from 'react';
import './style.scss';

function Info(props) {
  return (
    <article className="Info">
      <ul>
        <li>lat: {props.lat.toFixed(3)}</li>
        <li>lng: {props.lng.toFixed(3)}</li>
        <li>altitude: {props.altitude.toFixed(3)} m</li>
        <li>velocity: {props.velocity.toFixed(3)} m/s</li>
      </ul>

      <ul>
        <li>visibility: {props.visibility}</li>
        <li>daynum: {props.daynum}</li>
        <li>solar_lat: {props.solar_lat.toFixed(3)}</li>
        <li>solar_lon: {props.solar_lon.toFixed(3)}</li>
      </ul>
    </article>
  );
}

export default Info;
