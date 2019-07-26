import React from 'react'
import './Friend.css'

//This will be the component for each friend that is retrieved by the Steam APIs
const friend = (props) => {
    const styleMod = (props.selected) 
        ? { boxShadow: '0px 4px 5px grey inset', background: 'rgb(250, 250, 250)'} 
        : { }
    return (
    <div className="Friend" id={props.steamID} onClick={props.click} style={styleMod}>  
        <img src={props.img}/> 
        <p>{props.steamName}</p>
        {/* {props.steamID} */}
    </div>
    )
}

export default friend