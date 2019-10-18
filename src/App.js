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
    selectedOption: ''
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`)
    }
    console.log("select dropdown updated")
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Router className="App-header" />
        <Select className="App-header"
          value={this.state.selectedOption}
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
