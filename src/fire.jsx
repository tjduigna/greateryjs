// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"

import Button from "@material-ui/core/Button"


class Fire extends React.Component {

    onClick = () => {
        /* push button websocket message firing

        obtains current values of kind and route
        from parent and sends hard-coded message

        */
        const { ws, get_state } = this.props
        const route = get_state("route")
        const kind = get_state("kind")
        const msg = JSON.stringify({
            "route": route,
            "kind": kind,
            "content": "sour apple"
        })
        console.log("full msg", msg)
        try {
            ws.send(msg)
            console.log("sent message")
        } catch (e) {
            console.log(e, e.message)
        }
    }

    render() {
        return (
            <Button id="outlined-dense"
                    variant="outlined"
                    margin="dense"
                    fullWidth={true}
                    onClick={this.onClick}>
                {this.props.get_state("route")}
                </Button>
        )
    }
}

export default Fire
