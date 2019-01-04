import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { HashRouter } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <HashRouter>
        {routes}
      </HashRouter>
    );
  }
}

export default App;
