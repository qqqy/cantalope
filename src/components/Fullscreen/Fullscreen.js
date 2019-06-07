import React from 'react';
import "./Fullscreen.css";

export default class Fullscreen extends React.Component{
  constructor(){
    super()
    this.state = {
      whatever: true
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){}

  componentDidUpdate(previousProps , previousState){
    if(this.state.whatever !== previousState.whatever){
      this.setState({
        whatever: true
      })
    }
  }

  handleInput = (e) => {
    const {name , value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  render(){
    console.log("CURRENT VALUE OF WHATEVER" , this.state.whatever)
    return (
      <>
      <h1>{this.state.whatever ? "You should see this" : "You shouldn't really see this." }</h1>
      <button value="Hi Everybody!" onClick={e => console.log("THIS IS THE BUTTON'S VALUE: ", e.target.value)}>BUTTON!</button>
      <input name="whatever" onChange={this.handleInput}/>
      </>
      // <video id="background-video" loop autoPlay>
      //   <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
      //   Your browser does not support the "video" tag
      // </video>
      
    )
  }
}