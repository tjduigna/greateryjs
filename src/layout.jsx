// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import clsx from 'clsx'
import Home from './home'
import Search from './search'
import Create from './create'
import Contact from './contact'

import CssBaseline from '@material-ui/core/CssBaseline'
import MyAppBar from './matuicomp/appbar'
import MyDrawer from './matuicomp/drawer'
import Login from './authcomp/login'


const drawerWidth = 240


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
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


export default function Layout(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const { states } = props

            //<MatUI { ...states } />
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <CssBaseline />
                <MyAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
                <MyDrawer handleDrawerClose={handleDrawerClose} open={open} />
                <main className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })} >
                    <div className={classes.drawerHeader} />
                <div className={classes.appBarSpacer} />
                <Switch>
                    <Route path="/create" render={(props) =>
                        <Create { ...states } />} />
                    <Route path="/search" render={(props) =>
                        <Search { ...states } />} />
                    <Route path="/home" render={(props) =>
                        <Home { ...states } />} />
                    <Route path="/contact" render={(props) =>
                        <Contact />} />
                    <Route path="/" component={Login} />
                    </Switch>
                </main>
                </div>
            </BrowserRouter>
    )
}
