import React from 'react'
import './Platform.css'

const platform = (props) => (
    <div className={(props.selected) ? 'platform-selected' : 'platform'} id={props.name} onClick={props.click} >
        <p id={props.name}>{props.name}</p>
    </div>
)

export default platform