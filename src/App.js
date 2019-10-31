// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthProvider from './auth'
import Login from './login'
import WS from './ws'


const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: '#787c84',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
    },
}))


export default function App(props) {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <div className={classes.app}>
            <BrowserRouter>
                <AuthProvider>
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
