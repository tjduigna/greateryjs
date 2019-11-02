// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import logo from "../static/logo.svg"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useAuth } from './auth'


const useStyles = makeStyles(theme => ({
    house: {
        width: '40vmin',
        margin: 'auto',
    },
    items: {
        margin: theme.spacing(0.5),
    },
}))


export default function Login(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    let history = useHistory()
    let auth = useAuth()

    const input_props = {
        variant: "outlined",
        margin: "dense",
        fullWidth: true
    }
    const updateUsername = (evt) => {
        setUsername(evt.target.value)
    }
    const updatePassword = (evt) => {
        setPassword(evt.target.value)
    }
    const hitEnter = (evt) => {
        if (evt.keyCode == 13) {
            tryLogin()
        }
    }

    const tryLogin = () => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Request-Headers": "Origin, Content-Type, Accept",
            },
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(response => {
            const resp = response.json()
            resp.then(obj => {
                if (obj.authorized) {
                    auth.login(username)
                    history.push('/home')
                    history.goForward()
                }
            })
        }).catch(console.error)
    }

    return (
        <div className={classes.house}>
            <img src={logo} />
            <TextField { ...input_props }
                       className={classes.items}
                       label="Username"
                       onChange={updateUsername}
                       onKeyDown={hitEnter} />
            <TextField { ...input_props }
                       className={classes.items}
                       label="Password"
                       type="password"
                       onChange={updatePassword}
                       onKeyDown={hitEnter} />
            <Button { ...input_props }
                    className={classes.items}
                    onClick={tryLogin}>
                    Login
                    </Button>
            </div>
    )
}
