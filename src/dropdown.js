// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'

// core components
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

// style components
// import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'



class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dropval: ''
        }
    }

    formControl = {
        margin: 1,
        minWidth: 120,
        display: "flex",
        wrap: "nowrap"

    }

    handleChange = (e) => {
        const dropval = e.target.value
        console.log("updated dropdown", dropval)
        this.setState({ dropval })
        console.log("updating parent", this.props)
        this.props.dropdown_update(dropval)
    }

    render() {
        return (
            <FormControl variant="outlined" style={{...this.formControl}}>
                <InputLabel>Kind</InputLabel>
                <Select
                    value={this.state.dropval}
                    onChange={this.handleChange}
                    name="kind" >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={"ingredient"}>Ingredient</MenuItem>
                    <MenuItem value={"recipe"}>Recipe</MenuItem>
                    <MenuItem value={"meal"}>Meal</MenuItem>
                </Select>
            </FormControl>
        )
    }
}
                    //style={{ width: "100%" }}

export default Dropdown
