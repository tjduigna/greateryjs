// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import Dropdown from './dropdown'


export default function Dropdowns(props) {
    const { dropds, set_state } = props

    const update_drop = (drop, val) => {
        set_state(drop, val)
    }

    return (
        <div>
        {dropds.map((obj) => (
            <Dropdown key={obj.id}
                      value={obj.value}
                      items={obj.items}
                      update={update_drop} />
        ))}
        </div>
    )
}

