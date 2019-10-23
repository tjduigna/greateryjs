// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"

import Fire from "./fire.jsx"
import Entry from "./entry.jsx"
import Dropdown from "./dropdown.jsx"
import Grid from "./grid.jsx"

class Router extends React.Component {

    timeout = 250

    constructor(props) {
        /* top-level websocket client interface

        state supports route (do this task)
        and kind (for this data) concepts
        and their respective options as well
        as maintains the websocket client
        connection which has naive reconnect
        functionality
        */
        super(props)
        const route = "model"
        const kind = "ingredient"
        this.state = {
            ws: null,
            kind_options: [
                {"id": 0, "value": kind},
                {"id": 1, "value": "recipe"},
                {"id": 2, "value": "meal"}
            ],
            route_options: [
                {"id": 0, "value": route},
                {"id": 1, "value": "fetch"},
                {"id": 2, "value": "write"}
            ],
            kind: kind,
            route: route,
            data: []
        }
    }

    componentWillUnmount = () => {
        const { ws } = this.state
        ws.close()
    }

    componentDidMount = () => {
        this.connect()
    }

    connect = () => {
        /* establish websocket connection

        additionally will re-establish
        connection after server interruption
        checking every connectInterval seconds,
        which increases on back-to-back failure up
        to 10 seconds
        */
        var ws = new WebSocket("ws://localhost:5000/socket")
        let that = this
        var connectInterval
        ws.onopen = () => {
            console.log("ws client registered")
            this.setState({ ws })
            that.timeout = 250
            clearTimeout(connectInterval)
        }
        ws.onmessage = evt => {
            const data = JSON.parse(evt.data)
            console.log("ws client from server", data);
            if (data.id) {
                ws.id = data.id
            } else {
                this.setState({ data })
            }
            return false
        }
        ws.onerror = err => {
            console.log("ws errored with")
            console.log(err.message)
            console.log("closing ws")
            ws.close()
        }
        ws.onclose = evt => {
            const max = 30
            const mil = 1000
            const backoff = (2 * that.timeout) / mil
            const minsec = Math.min(max, backoff)
            console.log("ws closed, trying again in", minsec, "seconds")
            that.timeout = 2 * that.timeout
            const minmil = Math.min(max * mil, that.timeout)
            connectInterval = setTimeout(this.checkcon, minmil)
        }
    }

    checkcon = () => {
        /* simple ready check on the websocket

        */
        console.log("checking ws connection")
        const { ws } = this.state
        if (!ws || ws.readyState === WebSocket.CLOSED) this.connect()
    }

    get_state = (key) => {
        return this.state[key]
    }

    set_state = (key, value) => {
        console.log("router setting state key:",
            key, "old:", this.state[key], "new:", value)
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div>
                <Dropdown value="kind"
                          set_state={this.set_state}
                          menuitems={this.state.kind_options} />
                <Dropdown value="route"
                          set_state={this.set_state}
                          menuitems={this.state.route_options} />
                <Entry value="name"
                       ws={this.state.ws}
                       get_state={this.get_state} />
                <Entry value="desc"
                       ws={this.state.ws}
                       get_state={this.get_state} />
                <Fire ws={this.state.ws}
                      get_state={this.get_state} />
                <Grid />
            </div>
        )
    }
}

export default Router
