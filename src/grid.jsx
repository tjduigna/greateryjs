// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from "react"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


class Grid extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {key: 'id', name: 'ID'},
                {key: 'title', name: 'Title'},
                {key: 'count', name: 'Count'}
            ],
            rows: [
                {id: 0, title: 'row1', count: 20},
                {id: 1, title: 'row1', count: 40},
                {id: 2, title: 'row1', count: 60}
            ]
        }
    }

    itercols = () => {
        return (
            this.state.columns.map((col) =>
                <TableCell key={col.key}
                           value={col.name}>
                    {col.name}
                    </TableCell>
            )
        )
    }

    iterrows = () => {
        return (
            this.state.columns.map((col) =>
                <TableRow key={col.key}
                          value={col.name}>
                {
                this.state.rows.map((row) =>
                    <TableCell key={row.key}
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
