// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


class Grid extends React.Component {

    itercols = () => {
        const { get_state } = this.props
        const route = get_state("route")
        const cols = get_state("columns")
        return (
            cols[route].map(col =>
                <TableCell key={col.key}
                           value={col.name}
                           style={{ fontWeight: 'bold' }}>
                    {col.name}
                    </TableCell>
            )
        )
    }

    iterrows = () => {
        const { get_state } = this.props
        const route = get_state("route")
        const cols = get_state("columns")
        const rows = get_state("data")
        return (
            rows.map(row =>
                <TableRow key={row.id}>
                {
                cols[route].map(col =>
                    <TableCell key={col.key}
                               value={row[col.key]}>
                        {row[col.key]}
                        </TableCell>
                )
                }
                </TableRow>
            )
        )
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {this.itercols()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.iterrows()}
                </TableBody>
            </Table>
        )
    }

}


export default Grid
