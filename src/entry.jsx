// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'

import TextField from '@material-ui/core/TextField'


class Entry extends React.Component {

    constructor(props) {
        super(props)
        this.state = { inpval: '' }
    }

    onKeyDown = (evt) => {
        /* input field websocket message firing

        obtains current values of kind and route
        from parent and sends current value of
        input field

        */
        const { ws, get_state } = this.props
        const route = get_state("route")
        const kind = get_state("kind")
        const msg = JSON.stringify({
            route: route,
            kind: kind,
            content: this.state.inpval
        })
        console.log("full msg", msg)
        try {
            ws.send(msg)
        } catch (e) {
            console.log(e.message)
        }
    }

    onChange = (evt) => {
        const inpval = evt.target.value
        this.setState({ inpval })
    }

    render() {
        return (
            <TextField id="outlined-dense"
                       variant="outlined"
                       margin="dense"
                       label={this.props.value}
                       onChange={this.onChange}
                       onKeyDown={this.onKeyDown}
                       style={{
                           display: "flex"
                       }} />
        )
    }
}

export default Entry
