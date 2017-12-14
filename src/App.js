import React, { Component } from 'react';
import './App.css';
import FetchBeer from './FetchBeer.js';
class App extends Component {
  render() {
    return (
       <div>
          <FetchBeer />
       </div>
    );
  }
}

export default App;
