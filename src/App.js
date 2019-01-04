import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { HashRouter } from 'react-router-dom'
import store from './ducks/store'
import {Provider} from 'react-redux'

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          {routes}
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
