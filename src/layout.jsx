// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Dropdown from "./dropdown"
import Entry from "./entry"
import Grid from "./grid"
import Fire from "./fire"
// import { useAuth } from "./auth"


const useStyles = makeStyles(theme => ({
    box: {
    //    flex: 'grow',
    },
    controls: {
        // flexDirection: 'column',
        //verticalAlign: 'middle',
        width: '40vmin',
        margin: 'auto',
        transform: 'translateY(+25%)',
    },
    grid: {
        backgroundColor: '#787c84',
        //flexDirection: 'row',
        position: 'fixed',
        width: '100%',
        bottom: '0px'
    },
}))


export default function Layout(props) {
    const classes = useStyles()
    const theme = useTheme()
    const kind = "ingredient"
    const route = "model"
    const kind_options = [
        {"id": 0, "value": kind},
        {"id": 1, "value": "recipe"},
        {"id": 2, "value": "meal"}
    ]
    const route_options = [
        {"id": 0, "value": route},
        {"id": 1, "value": "fetch"},
        {"id": 2, "value": "write"}
    ]
//    const { user } = useAuth()
//    console.log(user)
//    console.log(useAuth())
    return (
        <div className={classes.box}>
            <div className={classes.controls}>
                <Dropdown value="kind"
                          set_state={props.set_state}
                          menuitems={kind_options} />
                <Dropdown value="route"
                          set_state={props.set_state}
                          menuitems={route_options} />
                <Entry value="name"
                       ws={props.ws}
                       get_state={props.get_state} />
                <Entry value="desc"
                       ws={props.ws}
                       get_state={props.get_state} />
                <Fire ws={props.ws}
                      get_state={props.get_state} />
                </div>
            <div className={classes.grid}>
            <Grid get_state={props.get_state}
                  set_state={props.set_state} />
                </div>
            </div>
    )
}
