import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import FetchBeer from './FetchBeer.js';
import BeerDetail from './BeerDetail.js';
import FavouriteBeer from './FavouriteBeer.js';
import Main from './Main.js';


class App extends Component {
  render() {
    return (
         <Switch>
              <Route path = '/detail' component = {FetchBeer} />
              <Route path = '/detail/:id' component = {BeerDetail} />
              <Route path = '/favourite' component = {FavouriteBeer} />
              <Route extact path='/' component={Main}/>
             
          </Switch>
       
    );
  }
}

export default App;
