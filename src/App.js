import React, { Component } from 'react'
import App2 from "./constructor"
class App extends Component{
  state = {
    name: "Bilal Fareed",
  }
     
  render() {
    console.log(this.state.name)
    return (
      <div>
        <h1>Create state in class component React </h1>
        <form>
          <label>User Name (This is React code, Create constructor)</label>
          <input type="" text value={this.state.name} />
          <br />
          <label>User Name (This is React code with default value)</label>
          <input type="" text defaulrtValue={this.state.name}/>
        </form>
        <h1>Create state with constructor in React</h1>
        <App2></App2>
      </div>
    )
  }
}

export default App