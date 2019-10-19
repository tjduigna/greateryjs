// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"

import Fire from './fire.jsx'
import Entry from './entry.jsx'
import Dropdown from './dropdown.jsx'

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

    componentDidMount() {
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
            this.setState({ ws: ws })
            that.timeout = 250
            clearTimeout(connectInterval)
        }
        ws.onmessage = (evt) => {
            const data = JSON.parse(evt.data)
            console.log("ws client from server", data);
            this.setState({ data })
        }
        ws.onerror = (err) => {
            console.log("ws errored with")
            console.log(err.message)
            console.log("closing ws")
            ws.close()
        }
        ws.onclose = (evt) => {
            let min = Math.min(10000 / 1000, (that.timeout + that.timeout) / 1000)
            console.log("ws client closed")
            console.log("trying again in", min, "seconds")
            console.log(evt.reason)
            that.timeout = that.timeout + that.timeout
            connectInterval = setTimeout(this.checkcon, Math.min(10000, that.timeout))
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
            <div className="Router">
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
            </div>
        )
    }
}

export default Router
