import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListBeers from './views/ListBeers';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import Home from './views/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={ListBeers} />
          <Route path="/new" component={NewBeer} />
          <Route path="/random" component={RandomBeer} />
          <Route path="/beer/:id" component={SingleBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
