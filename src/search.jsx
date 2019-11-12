// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import Dropdowns from "./usercomp/dropdowns"
import Entries from "./usercomp/entries"
import Fire from "./usercomp/fire"
import Grid from "./usercomp/grid"

const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    controls: {
        margin: 'auto',
        width: '50%',
    },
    grid: {
        width: '100%',
    },
}))


export default function Search(props) {
    const classes = useStyles()
    const theme = useTheme()
    const kind = "ingredient"
    const route = "model"
    const dropdowns = [
        {"id": 0, "value": "kind", "items": [
            {"id": 0, "value": kind},
            {"id": 1, "value": "recipe"},
            {"id": 2, "value": "meal"}
        ]},
        {"id": 1, "value": "route", "items": [
            {"id": 0, "value": route},
            {"id": 1, "value": "fetch"},
            {"id": 2, "value": "write"}
        ]}
    ]
    const entries = [
        {"id": 0, "value": "name"},
        {"id": 1, "value": "desc"}
    ]

    return (
        <div className={classes.box}>
            <div className={classes.controls}>
                <Dropdowns dropds={dropdowns}
                           set_state={props.set_state} />
                <Entries entries={entries}
                         set_state={props.set_state} />
                <Fire get_state={props.get_state} />
                </div>
            <div className={classes.grid}>
            <Grid get_state={props.get_state}
                  set_state={props.set_state} />
                </div>
            </div>
    )
}
