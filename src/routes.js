import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Alt from './components/Alt/Alt';
import DragNDrop from './components/DragNDrop';
import MountStore from './components/MountStore/MountStore';
import PropsExample from './components/PropsExample/PropsExample';
import HookParent from './components/Hooks/HookParent';
import Fullscreen from './components/Fullscreen/Fullscreen';
import Functional from './components/Functional';

export default
    <Switch>
      <Route path='/alt' component={Alt} />
      <Route path='/mountstore' component={ MountStore } />
      <Route path='/' component={Fullscreen} exact />
      <Route path='/ex' component={PropsExample} exact />
    </Switch>