import React from 'react'
import Friend from './Friend/Friend'

const friends = (props) => (
    <div>
        {props.friends.map(friend => {
            const selected = (props.selectedFriends.includes(friend.steamID))
            return <Friend
                friend={friend}
                selected={selected}
                click={props.click}
            />
        })}
    </div>
)

export default friends