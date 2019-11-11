// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './home'
import Search from './search'
import Create from './create'
import MatUI from './matuicomp/matui'
import Login from './authcomp/login'


export default function Layout(props) {
    const { states } = props

    return (
        <BrowserRouter>
            <MatUI { ...states } />
            <Switch>
                <Route path="/create" render={(props) =>
                    <Create { ...states } />} />
                <Route path="/search" render={(props) =>
                    <Search { ...states } />} />
                <Route path="/home" render={(props) =>
                    <Home { ...states } />} />
                <Route path="/" component={Login} />
                </Switch>
            </BrowserRouter>
    )
}
