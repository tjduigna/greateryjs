// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'


class Dropdown extends React.Component {

    constructor(props) {
        /*
        manage current dropdown selection
        */
        super(props)
        this.state = { dropval: '' }
        this.items = this.items.bind(this)
    }

    handleChange = (e) => {
        /*
        update parent state to current selection
        */
        const dropval = e.target.value
        const { value, set_state } = this.props
        this.setState({ dropval })
        set_state(value, dropval)
    }

    items = () => {
        /*
        iterate over menuitems prop to populate
        dropdown selections
        */
        const { menuitems } = this.props
        return (
            menuitems.map((item) =>
                <MenuItem key={item.id}
                          value={item.value}>
                    {item.value}
                    </MenuItem>
            )
        )
    }

    render() {
        return (
            <FormControl id="outlined-dense"
                         variant="outlined"
                         margin="dense"
                         fullWidth={true} >
                <InputLabel htmlFor="outlined" >
                    {this.props.value}
                    </InputLabel>
                <Select labelWidth={this.props.value.length * 8}
                        onChange={this.handleChange}
                        value={this.state.dropval} >
                    { this.items() }
                    </Select>
                </FormControl>
        )
    }
}

export default Dropdown
