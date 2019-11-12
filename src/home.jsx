// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useAuth } from './authcomp/auth'
import SimpleCard from './matuicomp/card'

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}))

export default function Home(props) {
    const classes = useStyles()
    const theme = useTheme()
    let { user } = useAuth()
    console.log(user)

    return (
        <div className={classes.box}>
            <div className={classes.appBarSpacer} />
            { user ?
                <h1> Hello {user} </h1>
                :
                <h1> Hello guest </h1>
            }
            <SimpleCard />
        </div>
    )
}
