// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0


import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import MyAppBar from './appbar'
import MyDrawer from './drawer'


// TODO : fix me
const drawerWidth = 240


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}))


export default function MatUI() {
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MyAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
            <MyDrawer handleDrawerClose={handleDrawerClose} open={open} />
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
                })} >
                <div className={classes.drawerHeader} />
                </main>
            </div>
    )
}
