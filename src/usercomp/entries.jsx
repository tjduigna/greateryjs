// Copright (c) 2019 Greatery Development Team
// Distributed under the terms of the Apache License 2.0

import React from 'react'
import Entry from './entry'


export default function Entries(props) {
    const { entries, set_state } = props
    const [ content, setContent ] = React.useState({})

    const update_content = (entry, cont) => {
        content[entry] = cont
        setContent({ ...content })
        set_state("content", content)
    }

    return (
        <div>
        {entries.map((obj) => (
            <Entry key={obj.id}
                   value={obj.value}
                   update={update_content} />
        ))}
        </div>
    )
}
