import React from 'react';
import store from '../../ducks/store'
import ChildExperiment from './ChildExperiment';

export default class MountStore extends React.Component{

  state = {
    store: {}
  }

  componentDidMount(){
    store.subscribe(() => this.setState({store: store.getState()}))
    console.log(this.props)
    console.log(this.state.store)
  }

  render(){
    return (
      <>
      <p>This is MountStore</p>
      <button onClick={() => console.log(store.getState())}>DEBUG</button>
      <ChildExperiment/>
      </>
    )
  }
}