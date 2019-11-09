// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AuthProvider from './authcomp/auth'
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
            <AuthProvider>
                <WS />
                </AuthProvider>
            </div>
    )
    // add a 404
}
