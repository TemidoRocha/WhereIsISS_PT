import React from 'react';
import './App.scss';
import { Component } from 'react';

import issData from './services/issData';

import ISSMap from './components/ISSMap/ISSMap';
import Info from './components/Info/Info';
import NavBar from './components/NavBar/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: false,
      zoom: 5,
      lat: null,
      lng: null,
      altitude: null,
      velocity: null,
      visibility: null,
      footprint: null,
      timestamp: null,
      daynum: null,
      solar_lat: null,
      solar_lon: null,
      units: null,
    };
    this.toggleInfo = this.toggleInfo.bind(this);
  }
  componentDidMount() {
    issData()
      .then((response) => {
        this.setState({
          lat: response.latitude,
          lng: response.longitude,
          altitude: response.altitude,
          velocity: response.velocity,
          visibility: response.visibility,
          footprint: response.footprint,
          timestamp: response.timestamp,
          daynum: response.daynum,
          solar_lat: response.solar_lat,
          solar_lon: response.solar_lon,
          units: response.units,
        });
      })
      .catch((error) => console.log(error));
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar toggleInfo={this.toggleInfo} />
        {this.state.info ? (
          <Info
            lat={this.state.lat}
            lng={this.state.lng}
            altitude={this.state.altitude}
            velocity={this.state.velocity}
            visibility={this.state.visibility}
            footprint={this.state.footprint}
            timestamp={this.state.timestamp}
            daynum={this.state.daynum}
            solar_lat={this.state.solar_lat}
            solar_lon={this.state.solar_lon}
            units={this.state.units}
          />
        ) : (
          ''
        )}
        {this.state.lat && this.state.lng ? (
          <ISSMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} />
        ) : (
          <span>Loading...</span>
        )}
        <footer className="Contact">
          <h5>Contact:</h5>
          <a href="https://github.com/TemidoRocha"> github.com/TemidoRocha</a>
        </footer>
      </div>
    );
  }
}

export default App;
