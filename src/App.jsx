import React from 'react';
import './App.scss';
import { Component, Link } from 'react';

import issData from './services/issData';

import ISSMap from './components/ISSMap/ISSMap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      zoom: 5,
    };
  }
  componentDidMount() {
    issData()
      .then((response) => {
        this.setState({
          lat: response.latitude,
          lng: response.longitude,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is the current location of the ISS
            <br />
            Latitude: {this.state.lat}
            <br />
            Longitude: {this.state.lng}
          </p>
        </header>
        {this.state.lat && this.state.lng ? (
          <ISSMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} />
        ) : (
          <span>Loading...</span>
        )}
        <footer className="Contact">
          <h5>Contact:</h5>
          <a href="https://github.com/TemidoRocha">github.com/TemidoRocha</a>
        </footer>
      </div>
    );
  }
}

export default App;
