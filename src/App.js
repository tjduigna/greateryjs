// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

// create-react-app stuff
import React from 'react'
import logo from './logo.svg'
import './App.css'

// aww yeah stuff
import Router from './router.js'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

class App extends React.Component {

  state = {
    dropval: ''

  }

  handleChange = (obj) => {
    const dropval = obj.target.value
    console.log("called handleChange", dropval)
    this.setState({ dropval })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router className="App-header" />
        <Select className="Select-header"
          value={this.state.dropval}
          onChange={this.handleChange}
          displayEmpty
          name="kind"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={"ingredient"}>Ingredient</MenuItem>
          <MenuItem value={"recipe"}>Recipe</MenuItem>
          <MenuItem value={"meal"}>Meal</MenuItem>
        </Select>
        </header>
      </div>
    )
  }
}

export default App
