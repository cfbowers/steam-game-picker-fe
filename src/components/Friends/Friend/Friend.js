import React from 'react'
import './Friend.css'

//This will be the component for each friend that is retrieved by the Steam APIs
const friend = (props) => {
    const friend = props.friend
    const styleMod = (props.selected) 
        ? { boxShadow: '0px 4px 5px grey inset', background: 'rgb(250, 250, 250)'} 
        : { }

    return (
    <div className="Friend" id={friend.steamID} onClick={props.click} style={styleMod}>  
        <img id="steam-img" src={friend.avatar.medium}/> 
        <p id="steam-name">{friend.nickname}</p>
        <p id="real-name">{friend.realName ? friend.realName : " "}</p>
        <p id="steam-id">{friend.steamID}</p>
    </div>
    )
}

export default friend