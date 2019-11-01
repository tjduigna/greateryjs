// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthProvider from './authcomp/auth'
import MatUI from './matuicomp/matui'
import Login from './authcomp/login'
import WS from './ws'


const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: '#787c84',
        flexDirection: 'column',
        display: 'flex',
        height: '100vh',
        width: '100vw',
    },
}))


export default function App(props) {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <div className={classes.app}>
            <BrowserRouter>
                <AuthProvider>
                <MatUI />
                <Switch>
                    <Route path="/home" component={WS} />
                    <Route path="/" component={Login} />
                    </Switch>
                </AuthProvider>
                </BrowserRouter>
            </div>
    )
    // add a 404
}
