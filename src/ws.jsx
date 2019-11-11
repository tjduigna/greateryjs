// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"

import Layout from "./layout"
import { AuthContext } from './authcomp/auth'

class WS extends React.Component {
    static contextType = AuthContext
    timeout = 250

    constructor(props) {
        /* top-level websocket client interface

        state supports route (perform this task)
        and kind (on this data) concepts
        and their respective options as well
        as maintains the websocket client
        connection which has naive reconnect
        functionality
        */
        super(props)
        const route = "model"
        const kind = "ingredient"
        const updatable = false

        this.state = {
            ws: null,
            wsurl: "ws://localhost:5000/socket",
            content: {},
            columns: {
                fetch: [
                    {key: 'id', name: 'Id', editable: false},
                    {key: 'name', name: 'Name', editable: true},
                    {key: 'desc', name: 'Description', editable: true}
                ],
                model: [
                    {key: 'id', name: 'Id'},
                    {key: 'guess', name: 'Input'},
                    {key: 'conf', name: 'Confidence'},
                    {key: 'check', name: 'Entity'}
                ],
                write: []
            },
            kind: kind,
            route: route,
            data: []
        }
    }

    componentDidMount = () => {
        const user = this.context
        console.log("component mounted", user)
        this.connect()
    }

    heartbeat = () => {
        /* register a heartbeat

        support a heartbeat from the client
        as well as from the server for debugging
        purposes
        */
        console.log("hit heartbeat")
        const { ws } = this.state
        if (ws && ws.readyState === ws.OPEN) {
            console.log("sending heartbeat")
        }
    }

    connect = () => {
        /* establish websocket connection

        additionally will re-establish
        connection after server interruption
        checking every connectInterval seconds,
        which increases on back-to-back failure up
        to 10 seconds
        */
        var ws = new WebSocket(this.state.wsurl)
        let that = this
        var connectInterval
        ws.onopen = () => {
            console.log("ws client registered")
            this.setState({ ws })
            that.timeout = 250
            clearTimeout(connectInterval)
            //setInterval(function() {
            //    console.log("sending heartbeat")
            //    ws.send("heartbeat from client")
            //}, 5000)
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
            console.log(err, err.message)
            console.log("closing ws")
            ws.close()
        }
        ws.onclose = evt => {
            const max = 30
            const mil = 1000
            const backoff = (2 * that.timeout) / mil
            const minsec = Math.min(max, backoff)
            console.log("ws closed, trying again in",
                        minsec, "seconds")
            that.timeout = 2 * that.timeout
            const minmil = Math.min(max * mil, that.timeout)
            connectInterval = setTimeout(this.checkcon, minmil)
        }
    }

    checkcon = () => {
        /* simple ready check on the websocket

        */
        const { ws } = this.state
        if (!ws || ws.readyState === WebSocket.CLOSED) this.connect()
    }

    get_state = (key) => {
        return this.state[key]
    }

    set_state = (key, value) => {
        this.setState({ [key]: value })
    }

    render() {
        const states = {
            get_state: this.get_state,
            set_state: this.set_state
        }
        // want auth context in the ws
        // for control-based logic
        // as well as in downstream components
        // for auth-based ui logic
        const { isAuth } = this.context
        console.log("ws render", isAuth)

        return (
            <Layout states={states} />
        )
    }
}

export default WS
