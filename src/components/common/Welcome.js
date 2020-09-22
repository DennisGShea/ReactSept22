import React, { Component } from 'react'

const initialValue = 20

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 49 }
  }

  handleClick(change) {
    let { counter } = this.state
    this.setState({ counter: counter + change })
  }
  
  render() {
    let { name } = this.props
    let { counter } = this.state
    return (
      <>
        <h1>Hello, {name}</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => this.handleClick()}>
          Increase
          </button>
      </>
    )
  }
}
export default Welcome