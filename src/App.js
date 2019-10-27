// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
// import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Login from './login.jsx'

// Rename Router to Socket or something 
// to disambiguate with react-router duh
// import Router from "./router.jsx"


      /*
import PersistentDrawerLeft from './drawer.jsx'
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PersistentDrawerLeft />
      </div>
      */

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: '#686c74',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
    },
}))

export default function App() {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className={classes.app}>
            <Login />
        </div>
    )
}


//import {
//  BrowserRouter as Router,
//  Switch,
//  Route,
//  Link
//} from "react-router-dom";
//
//        //style={{ float: 'left' }}>
//
//export default function App() {
//  return (
//    <Router>
//      <div style={{
//          display: 'flex',
//          flexDirection: 'row'
//      }}>
//        <div>
//        <img src={logo} />
//        <nav>
//          <ul>
//            <li>
//              <Link to="/">Home</Link>
//            </li>
//            <li>
//              <Link to="/about">About</Link>
//            </li>
//            <li>
//              <Link to="/users">Users</Link>
//            </li>
//          </ul>
//        </nav>
//        </div>
//
//        {/* A <Switch> looks through its children <Route>s and
//            renders the first one that matches the current URL. */}
//        <div>
//        <Switch>
//          <Route path="/about">
//            <About />
//          </Route>
//          <Route path="/users">
//            <Users />
//          </Route>
//          <Route path="/">
//            <Home />
//          </Route>
//        </Switch>
//        </ div>
//      </div>
//    </Router>
//  );
//}
//
//function Home() {
//  return <h2>Home</h2>;
//}
//
//function About() {
//  return <h2>About</h2>;
//}
//
//function Users() {
//  return <h2>Users</h2>;
//}
