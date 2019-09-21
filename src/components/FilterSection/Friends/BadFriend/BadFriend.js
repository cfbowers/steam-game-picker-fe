import React from 'react'
import './BadFriend.css'

//This will be the component for each friend that is retrieved by the Steam APIs
const friend = (props) => {
    const friend = props.friend
    const sID = friend.steamID

    // Added steamid attribute below to make whole div feel like once piece. When clicking any html item within the div,
    // the steamid is added to the selectedFriends array in state. Probably a better way to do this, but will come back.
    return (
        <div className="bad-friend" id={sID} steamid={sID} onClick={props.click} >  
            <img id="steam-img" steamid={sID} src={friend.avatar.medium} alt=""/> 
            <p id="steam-name" steamid={sID}>{friend.nickname}</p>
            <p id="real-name" steamid={sID}>{friend.realName ? friend.realName : " "}</p>
            <p id="steam-id" steamid={sID}>{friend.steamID}</p>
            <p id="problem-reason" steamid={sID}>{props.reason}</p>
        </div>
    )
}

export default friend