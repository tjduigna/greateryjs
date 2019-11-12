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
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import AddCircleIcon from '@material-ui/icons/AddCircle'
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
        {"id": 0, "value": "Home", "route": "/home", "icon": HomeIcon},
        {"id": 1, "value": "Search", "route": "/search", "icon": SearchIcon},
        {"id": 2, "value": "Create", "route": "/create", "icon": AddCircleIcon},
    ]


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
                        <ListItemIcon><obj.icon />
                            </ListItemIcon>
                        <ListItemText primary={obj.value} />
                        </ListItem>
                        </Link>
                ))}
                </List>
            <Divider />
            <List>
                {['Contact'].map((text, index) => (
                    <Link to="/contact"
                          key={text}
                          style={{ color: 'black' }}>
                    <ListItem button key={text}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                    </Link>
                ))}
                </List>
            </Drawer>
    )
}
