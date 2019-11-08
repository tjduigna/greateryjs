// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles, useTheme } from '@material-ui/core/styles'


export default function Fire(props) {

    const fire = () => {
        const { get_state } = props
        try {
            get_state("ws").send(
                JSON.stringify({
                    "route": get_state("route"),
                    "kind": get_state("kind"),
                    "content": get_state("content")
                })
            )
        } catch(e) {
            console.log(e, e.message)
        }
    }

    return (
        <Button id="outlined-dense"
                variant="outlined"
                margin="dense"
                fullWidth={true}
                onClick={fire}>
                {props.get_state("route")}
                </Button>
    )
}

