import React, { Component } from 'react'
import {testWordArray} from '../../ducks/reducer'
import { connect } from 'react-redux'

class AddWord extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }

  componentDidMount(){
    console.log(this.props)
  }

  componentDidUpdate(old){
    if(old !== this.props){
      console.log(this.props)
    }
  }

  handleInput(val){
    this.setState({input: val})
  }

  render(){
    let words = this.props.wordArray.map((val, i) => {return (<h1 key={i}>{val}</h1>)} )
    return (
      <>
      <input onBlur={e => this.handleInput(e.target.value)} />
      <button onClick={() => this.props.testWordArray(this.state.input)}>Submit Word</button>
      {words}
      </>
    )
  }
}

function mapPropsToState(state){
  const { wordArray } = state
  return {
    wordArray
  }
}

const actions = {
  testWordArray
}

export default connect( mapPropsToState, actions )(AddWord)