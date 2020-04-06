import React from 'react';
import { Fragment } from 'react';
import './style.scss';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet';
import L from 'leaflet';

function ISSMap(props) {
  const position = [props.lat, props.lng];
  const myIcon = L.icon({
    iconUrl: './../images/Space-International-space-station.svg',
    iconSize: [45, 41], // size of the icon
    iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -41], // point from which the popup should open relative to the iconAnchor
  });
  const pastIcon = L.icon({
    iconUrl: './../images/dot.png',
    iconSize: [5, 5], // size of the icon
    iconAnchor: [0, 20], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -41], // point from which the popup should open relative to the iconAnchor
  });
  return (
    <Fragment>
      <LeafletMap className="leafletMap" center={position} zoom={props.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {props.trace &&
          props.pastPos.map((pastPosition, key, arr) => {
            if (key < arr.length - 7) {
              return <Marker key={key} position={pastPosition} icon={pastIcon}></Marker>;
            }
          })}
        <Marker position={position} icon={myIcon}>
          <Popup>
            <a href="https://github.com/TemidoRocha">github.com/TemidoRocha</a>
          </Popup>
        </Marker>
      </LeafletMap>
    </Fragment>
  );
}

export default ISSMap;
