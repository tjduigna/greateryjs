// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MailIcon from '@material-ui/icons/Mail'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { Link, withRouter } from 'react-router-dom'

// TODO : fix me
const drawerWidth = 240


const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}))


export default function MyDrawer(props) {
    const classes = useStyles()
    const theme = useTheme()
    const items = [
        {"id": 0, "value": "Home", "route": "/home"},
        {"id": 1, "value": "Search", "route": "/search"},
        {"id": 2, "value": "Create", "route": "/create"},
    ]
//    let history = useHistory()

//    const set_route = (route) => {
//        console.log("setting route", route)
//        history.push(route)
//        history.goForward()
//
//    }

    return (
        <Drawer className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.open}
                classes={{ paper: classes.drawerPaper }} >
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                    </IconButton>
                </div>
            <Divider />
            <List>
                {items.map(obj => (
                    <Link to={obj.route}
                          key={obj.key}
                          style={{ color: 'black' }}>
                    <ListItem button key={obj.id}>
                        <ListItemIcon><ChevronRightIcon />
                            </ListItemIcon>
                        <ListItemText primary={obj.value} />
                        </ListItem>
                        </Link>
                ))}
                </List>
            <Divider />
            <List>
                {['Contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
    )
}
