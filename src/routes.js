import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Alt from './components/Alt/Alt';
import DragNDrop from './components/DragNDrop';

export default
    <Switch>
      <Route path='/alt' component={Alt} />
      <Route path='/' component={DragNDrop} exact />
    </Switch>