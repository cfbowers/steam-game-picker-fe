import React from 'react'
import Platform from './Platform/Platform'

const platforms = (props) => (
    <div id="platforms">
        {props.names.map(name => { 
            const selected = (props.selectedPlatforms.includes(name))
            return <Platform name={name} key={name} click={props.click} selected={selected}/>
        })}
    </div>
)



export default platforms