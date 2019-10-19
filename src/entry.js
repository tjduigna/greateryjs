// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'

import TextField from '@material-ui/core/TextField'


class Entry extends React.Component {

    state = {
        inpval: ''
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (this.props.ws) {
                this.props.ws.send(
                    JSON.stringify({
                        route: "model",
                        kind: "ingredient",
                        content: this.state.inpval
                    })
                )
            }
        }
    }

    onChange = (obj) => {
        const inpval = obj.target.value
        this.setState({ inpval })
    }

    render() {
        return (
            <TextField
                id="outlined-dense"
                variant="outlined"
                margin="dense"
                label="Search"
                onKeyDown={this.onKeyDown}
                onChange={this.onChange}
                style={{
                    width: "100%",
                    marginLeft: 1,
                    marginRight: 1,
                    marginTop: 2
                }}
            />
        )
    }
}

export default Entry
