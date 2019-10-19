// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import logo from './logo.svg'
import './App.css'

import Router from './router.js'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router className="App-header" />
        </header>
      </div>
    )
  }
}


export default App
