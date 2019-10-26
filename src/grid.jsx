// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import ReactDataGrid from 'react-data-grid'


class Grid extends React.Component {

    constructor(props) {
        super(props)
        this.state = { edited: [] }
    }

    update_data = ({ fromRow, toRow, updated }) => {
        /* Store the editable updates in parent's
        state and keep the edited records in
        this component's state for push-button update
        to the database

        */
        const { get_state, set_state } = this.props
        const rows = get_state("data").slice()
        for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated }
        }
        set_state("data", rows)
        const { edited } = this.state
        edited.push(rows[fromRow])
        this.setState({ edited })
    }

    render() {
        const { get_state } = this.props
        const route = get_state("route")
        const cols = get_state("columns")
        const rows = get_state("data")
        const getRow = rowNum => rows[rowNum]
        console.log(this.state)
        return (
            <ReactDataGrid columns={cols[route]}
                           rowGetter={getRow}
                           rowsCount={rows.length}
                           minHeight={500}
                           onGridRowsUpdated={this.update_data}
                           enableCellSelect={true}
                           />
        )
    }

}


export default Grid
