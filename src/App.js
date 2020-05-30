import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css';

/* <Route path='./detail/:id' component = { Detail } /> 
Cualquier cosa que se meta detras de detail/ lo va a tomar como un Id
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component = { Home } />
          <Route path='/detail/:movieId' component = { Detail } /> 
          <Route component = { NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
