import React from 'react'
import './Platform.css'

const platform = (props) => {
    const styleMod = (props.selected) 
        ? { boxShadow: '0px 4px 5px grey inset', background: 'rgb(250, 250, 250)'} 
        : { }

    return (
        <div 
        className="Platform" 
        id={props.name} 
        onClick={(event) => { props.click(event) }} 
        style={styleMod}>
            <p>{props.name}</p>
        </div>
    )
}

export default platform