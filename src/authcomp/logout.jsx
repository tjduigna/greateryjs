// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useAuth } from './auth'


const useStyles = makeStyles(theme => ({
    logout: {
        marginLeft: theme.spacing(2),
    },
}))


export default function Logout(props) {
    const classes = useStyles()
    const theme = useTheme()
    let history = useHistory()
    let auth = useAuth()

    const logout = () => {
        auth.logout()
        history.push('/')
        history.goForward()
    }

    return (
        <Button className={classes.logout}
                onClick={logout}
                variant="outlined"
                margin="dense">
                    {props.label}
                </Button>
    )
}
