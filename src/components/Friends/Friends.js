import React from 'react'
import Friend from './Friend/Friend'

const friends = (props) => (
    <div id="friends">
        {props.friends.map(friend => {
            const selected = (props.selectedFriends.includes(friend.steamID))
            return <Friend key={friend.steamID} friend={friend} selected={selected} click={props.click}/>
        })}
    </div>
)

export default friends
