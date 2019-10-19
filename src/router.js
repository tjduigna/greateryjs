// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"

import { But } from './button.js'
import Entry from './entry.js'
import Dropdown from './dropdown.js'

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
            console.log(this.state)
        }

        this.getKind = (obj) => {
            console.log(obj, this.state)
            return this.state.kind
        }
        this.getRoute = (obj) => {
            console.log(obj, this.state)
            return this.state.route
        }
    }

    onClick = () => {
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

    dropdown_kind = (kind) => {
        console.log("hit dropdown_kind", kind)
        this.setState({ kind })
    }

    dropdown_route = (route) => {
        console.log("hit dropdown_route", route)
        this.setState({ route })
    }

//    onChange = (e) => {
//        const kind = e.target.value
//        console.log("updated dropdown", kind)
//        this.setState({ kind })
//    }

                     //button_update={this.button_update}

//                <But ws={this.ws}
//                     onClick={this.onClick}
//                     value={this.getKind}
//                />
    render() {
        return (
            <div className="Router">
                <Entry ws={this.ws} />
                <Dropdown ws={this.ws}
                          onChange={this.onChange}
                          value={this.getKind}
                          dropdown_update={this.dropdown_kind}
                />
                <Dropdown ws={this.ws}
                          onChange={this.onChange}
                          value={this.getRoute}
                          dropdown_update={this.dropdown_route}
                />
            </div>
        )
    }
}

export default Router
