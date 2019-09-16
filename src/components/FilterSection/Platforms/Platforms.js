import React from 'react'
import Platform from './Platform/Platform'

const platforms = (props) => props.names.map(name => { 
    const selected = (props.selectedPlatforms.includes(name))
    return <Platform name={name} key={name} click={props.click} selected={selected}/>
})

export default platforms