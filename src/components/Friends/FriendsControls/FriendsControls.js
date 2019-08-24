import React from 'react'

const friendsControls = (props) => (
    <div>
        <input type="text" placeholder="Steam ID"/>
        <button onClick={props.getFriends}>Get Friends</button> 
        <input placeholder="search for friends" onChange={(event) => props.filterFriends(event)}/>
    </div>
)

export default friendsControls