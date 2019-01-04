import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: 'Nothing Yet!'
    }
  }

  componentDidMount(){
    axios.get('/api/dbtest').then(res => this.setState(res.data))
  }
  
  render() {
    return (
      <>
        {this.state.test}
      </>
    );
  }
}

export default App;
