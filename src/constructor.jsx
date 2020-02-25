import React, { Component } from 'react'

class App2 extends Component{
  constructor(props) {
    super(props)
    
  this.state = {
    name: "Sajjad Bhojani",
  }
  }
    
  render() {
    console.log(this.state.name)
    return (
      <div>
        <form>
          <label>User Name (This is React code, Create constructor)</label>
          <input type="" text value={this.state.name} />
          <br />
          <label>User Name (This is React code with default value)</label>
          <input type="" text defaulrtValue={this.state.name}/>
        </form>
      </div>
    )
  }
}

export default App2