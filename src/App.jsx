import React from 'react';
import './App.css';
import { Component } from 'react';
import issData from './services/issData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lon: null,
    };
  }
  componentDidMount() {
    issData()
      .then((response) => {
        this.setState({
          lat: response.latitude,
          lon: response.longitude,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">This is the current location of the ISS</header>
        <p>
          Latitude: {this.state.lat}
          <br />
          Longitude: {this.state.lon}
        </p>
      </div>
    );
  }
}

export default App;
