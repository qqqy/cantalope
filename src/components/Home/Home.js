import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: 'Nothing Yet!'
    }
  }

  componentDidMount(){
    axios.get('/api/dbtest').then(res => this.setState(res.data))
    setTimeout(() => {
      console.log(this.props)
    }, 3000);
  }

  componentDidUpdate(oldProps){
    if(oldProps !== this.props){
      console.log(this.props)
    }
  }
  
  render() {
    return (
      <>
        {this.state.test}
      </>
    );
  }
}

function mapPropsToState( state ){
  const { test , definitely } = state
  return {
    test,
    definitely
  }
}



export default connect (mapPropsToState)(Home)
