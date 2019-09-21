import React from 'react'
import Friend from './Friend/Friend'
import BadFriend from './BadFriend/BadFriend'

const friends = (props) => props.friends.map(friend => {
    const selected = (props.selectedFriends.includes(friend.steamID))
 
    if (friend.visibilityDescription != 'public')  {
        return <BadFriend key={friend.steamID} friend={friend} reason="Not public"/> 
    } else if (!friend.appIDs) {
        return <BadFriend key={friend.steamID} friend={friend} reason="Unable to access games using this steam api key"/> 
    } else {
        return <Friend key={friend.steamID} friend={friend} selected={selected} click={props.click}/>
    }
})

export default friends
