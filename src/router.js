// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import Button from "@material-ui/core/Button"

class Router extends React.Component {

    constructor(props) {
        super(props)
        this.ws = new WebSocket("ws://localhost:5000/socket")
        this.state = {
            kind: "ingredient",
            route: "model",
            fetch: 0,
            model: 0,
            write: 0,
            data: []
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick = () => {
        console.log("button pressed")
        const kind = this.state.kind
        const route = this.state.route
        let state = { ...this.state }
        state[route] += 1
        this.setState(state)
        this.ws.send(
            JSON.stringify({
                "route": route,
                "kind": kind,
                "content": "sour apple"
            })
        )
        console.log("fired message")
    }

    componentDidMount() {
        this.ws.onopen = () => {
            console.log("ws client registered")
        }
        this.ws.onmessage = evt => {
            console.log(`ws client from server: ${evt.data}`);
            const data = JSON.parse(evt.data)
            console.log(data)
            this.setState({ data })
            console.log(this.state)
        }
        this.ws.onclose = (evt) => {
            console.log("ws client closed")
        }
    }

    render() {
        return (
            <div className="Router">
                <Button variant="contained"
                        onClick={this.onClick}>
                    {this.state.kind}
                </Button>
            </div>
        )

    }

}

export default Router
