import React from 'react'
import './Friend.css'

//This will be the component for each friend that is retrieved by the Steam APIs
const friend = (props) => {
    return (
    <div className="Friend" id={props.steamID} onClick={props.click}>  
        <img src={props.img}/> 
        <p>{props.steamName}</p>
        {/* {props.steamID} */}
    </div>
    )
}

export default friend