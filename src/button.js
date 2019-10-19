// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"

import Button from "@material-ui/core/Button"


//class Fire extends React.Component {
//
//    onClick = () => {
//        console.log("button pressed")
//        const kind = this.state.kind
//        const route = this.state.route
//        let state = { ...this.state }
//        state[route] += 1
//        this.setState(state)
//        this.ws.send(
//            JSON.stringify({
//                "route": route,
//                "kind": kind,
//                "content": "sour apple"
//            })
//        )
//        console.log("fired message")
//    }
//
//    render() {
//        return (
//            <Button variant="contained"
//                    onClick={this.onClick}>
//                {this.props.state.kind}
//            </Button>
//        )
//    }
//}
//
//export default Fire

export const But = ({ onClick, value }) => (
    <Button variant="contained"
            onClick={onClick}>
    { value }
    </Button>
)
