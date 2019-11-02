// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import clsx from 'clsx'

import { makeStyles, useTheme } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
// import Button from '@material-ui/core/Button'
import Logout from '../authcomp/logout'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../authcomp/auth'


// TODO : fix me
const drawerWidth = 240


const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
}))


export default function MyAppBar(props) {
    const classes = useStyles()
    const theme = useTheme()
    const { isAuth } = useAuth()
//    let auth = useAuth()

    return (
        <AppBar position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open,
                })} >
            <Toolbar>
                { isAuth ?
                    <IconButton color="inherit"
                                aria-label="open drawer"
                                onClick={props.handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton,
                                                props.open && classes.hide)} >
                            <MenuIcon />
                        </IconButton>
                    : null
                }
                <Typography variant="h6" noWrap style={{ flex: 1 }}>
                    grEatery
                    </Typography>
                { isAuth ?
                    <Logout />
                    : null
                }
                </Toolbar>
            </AppBar>
    )

}
