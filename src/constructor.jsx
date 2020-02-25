import React, { Component } from 'react'

class App2 extends Component{
  constructor(props) {
    super(props)
    
  this.state = {
    name: "Sajjad Bhojani",
    }
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange = (event) => {
    this.setState({name: event.target.value.toUpperCase()})
  }
    
  render() {
    console.log(this.state.name)
    return (
      <div>
        <form>
          <label>User Name (This is React code, Create constructor)</label>
          <input type="" text value={this.state.name} onChange={this.handlerChange} />
          <p>{this.state.name}</p>
          <br />
          <label>User Name (This is React code with default value)</label>
          <input type="" text defaulrtValue={this.state.name}/>
        </form>
      </div>
    )
  }
}

export default App2