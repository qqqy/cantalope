import React from 'react';
import Child from './Child';

class PropsExample extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      boss: "Jake"
    }
    this.jakesFunction = this.jakesFunction.bind(this)
  }

  jakesFunction (){
    console.log(this.state.boss)
  }

  render(){
    return (
      <>
      <p>This Is PropsExample</p>
      <Child boss={this.state.boss}/>
      </>
    )
  }
}

export default PropsExample