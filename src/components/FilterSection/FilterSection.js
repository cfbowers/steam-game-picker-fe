import React, { Component } from 'react'
import Platforms from './Platforms/Platforms'
import Friends from './Friends/Friends'
import request from 'request'

class FilterSection extends Component {
    state = {
        friends: [], 
        selectedFriends: [], 
        selectedPlatforms: []
    }

    friendClickHandler = (event) => {
        const steamID = event.target.getAttribute('steamid')
        const selectedFriends = [...this.state.selectedFriends]
        const friendIndex = selectedFriends.findIndex(friend => friend === steamID)
        if (friendIndex >= 0) {
            selectedFriends.splice(friendIndex, 1)
        } else if (steamID) {
            selectedFriends.push(steamID)
        }
        this.setState({ selectedFriends })
    }

    getFriendsHandler = () => {
        request.get('http://localhost:3001/api/users/76561197977157776/friends', (err, resp, body) => {
            this.setState({ friends: JSON.parse(body) })
        })
    }

    filterFriendsHandler = (event) => {
        const searchValue = event.target.value
        const friends = [...this.state.friends]
        const filteredFriends = friends.filter(friend => {
            return (
                (friend.nickname && friend.nickname.toLowerCase().includes(searchValue.toLowerCase()))
                || 
                (friend.realName && friend.realName.toLowerCase().includes(searchValue.toLowerCase())) 
            )
        })
        this.setState({ filteredFriends })
    }

    platformClickHandler = (event) => {
        const platform = event.target.id
        const platforms = [...this.state.selectedPlatforms]
        const platformIndex = platforms.findIndex(p => p === platform)
        if (platformIndex >= 0) {
            platforms.splice(platformIndex, 1)
        } else {
            platforms.push(platform)
        }
        this.setState({ selectedPlatforms: platforms })
    }

    render() {
        return (
            <div>
                <Friends
                    selectedFriends={this.state.selectedFriends}
                    friends={this.state.filteredFriends ? this.state.filteredFriends : this.state.friends}
                    click={this.friendClickHandler}
                />

                <Platforms 
                    names={['mac', 'linux', 'windows']} 
                    click={this.platformClickHandler}
                    selectedPlatforms={this.state.selectedPlatforms}
                /> 

                <input type="text" placeholder="Steam ID"/>
                <button onClick={this.getFriendsHandler}>Get Friends</button> 
                <input placeholder="search for friends" onChange={this.filterFriendsHandler}/>
            </div>
        )
    }
}

export default FilterSection