// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import TextField from '@material-ui/core/TextField'


export default function Entry(props) {
    const { value, update } = props

    const updateInp = (evt) => {
        update(value, evt.target.value)
    }

    return (
        <TextField id="outlined-dense"
                   variant="outlined"
                   margin="dense"
                   fullWidth={true}
                   label={props.value}
                   onChange={updateInp}
                   onKeyDown={updateInp} />
    )
}
