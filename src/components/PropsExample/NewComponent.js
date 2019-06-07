import React, { Component } from 'react'
import ChildExperiment from '../MountStore/ChildExperiment';


class NewComponent extends Component{

  state = {
    thingINeedToRememner: "Dr. Appt"
  }

  sayHi = () => {
    console.log(this.state.thingINeedToRememner)
  }

  render(){
    return(
      <div>
        This is NewComponent
        <ChildExperiment sayHi={this.sayHi}/>
      </div>
    )
  }
}

export default NewComponent