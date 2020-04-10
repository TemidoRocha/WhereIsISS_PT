import React, { useState, useEffect } from 'react';
import './App.scss';

import issData from './services/issData';

import ISSMap from './components/ISSMap/ISSMap';
import Info from './components/Info/Info';
import NavBar from './components/NavBar/index';

const App = () => {
  const [info, setInfo] = useState(false);
  const [trace, setTrace] = useState(true);
  const [zoom, setZoom] = useState(3);
  const [pastPos, setPastPos] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [velocity, setVelocity] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [footprint, setFootprint] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [daynum, setDaynum] = useState(null);
  const [solar_lat, setSolar_lat] = useState(null);
  const [solar_lon, setSolar_lon] = useState(null);
  const [units, setUnits] = useState(null);

  function fetchDataInterval() {
    issData()
      .then((response) => {
        const position = [response.latitude, response.longitude];
        setLat(response.latitude);
        setLng(response.longitude);
        setAltitude(response.altitude);
        setVelocity(response.velocity);
        setVisibility(response.visibility);
        setFootprint(response.footprint);
        setTimestamp(response.timestamp);
        setDaynum(response.daynum);
        setSolar_lat(response.solar_lat);
        setSolar_lon(response.solar_lon);
        setUnits(response.units);
        setPastPos([...pastPos, position]);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const spaceInterval = setTimeout(() => {
      fetchDataInterval();
    }, 3000);
    return () => clearTimeout(spaceInterval);
  });

  function toggleInfo() {
    setInfo(!info);
  }

  function toggleTrace() {
    setTrace(!trace);
  }

  return (
    <div className="App">
      <NavBar toggleInfo={toggleInfo} toggleTrace={toggleTrace} />
      {info ? (
        <Info
          lat={lat}
          lng={lng}
          altitude={altitude}
          velocity={velocity}
          visibility={visibility}
          footprint={footprint}
          timestamp={timestamp}
          daynum={daynum}
          solar_lat={solar_lat}
          solar_lon={solar_lon}
          units={units}
        />
      ) : (
        ''
      )}
      {lat && lng ? (
        <ISSMap lat={lat} lng={lng} zoom={zoom} pastPos={pastPos} trace={trace} />
      ) : (
        <span>Loading...</span>
      )}
      <footer className="Contact">
        <h5>Contact:</h5>
        <a href="https://github.com/TemidoRocha"> github.com/TemidoRocha</a>
      </footer>
    </div>
  );
};

export default App;
