// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'


export default function Dropdown(props) {
    const [ dropval, setDropVal ] = React.useState('')

    const items = () => {
        /*
        iterate over items prop to populate
        dropdown selections
        */
        const { items } = props
        return (
            items.map((item) =>
                <MenuItem key={item.id}
                          value={item.value}>
                    {item.value}
                    </MenuItem>
            )
        )
    }

    const updateDrop = (evt) => {
        setDropVal(evt.target.value)
        props.update(props.value, evt.target.value)
    }

    return (
        <FormControl id="outlined-dense"
                     variant="outlined"
                     margin="dense"
                     fullWidth={true} >
            <InputLabel htmlFor="outlined" >
                {props.value}
                </InputLabel>
            <Select labelWidth={props.value.length * 8}
                    onChange={updateDrop}
                    value={dropval} >
                { items() }
                </Select>
            </FormControl>
    )

}
