import React, { Component } from 'react';
import './App.css';

import Platforms from '../components/Platforms/Platforms'
import Friends from '../components/Friends/Friends'
import FriendsControlls from '../components/Friends/FriendsControls/FriendsControls'
import request from 'request'

class App extends Component {
    state = { friends: [], selectedFriends: [], selectedPlatforms: [] }

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

    submitHandler = (event) => {
        request.post('http://localhost:3001/api/users', { 
            json: { steamIDs: this.state.selectedFriends.join(',') } 
        })
    }

  render() {
    return (
        <div className="App">
            <header className="App-header"></header>

            <Platforms 
            names={['mac', 'linux', 'windows']} 
            click={this.platformClickHandler}
            selectedPlatforms={this.state.selectedPlatforms}/> 

            <FriendsControlls 
            getFriends={this.getFriendsHandler} 
            filterFriends={this.filterFriendsHandler} /> 

            <Friends
            selectedFriends={this.state.selectedFriends}
            friends={this.state.filteredFriends ? this.state.filteredFriends : this.state.friends}
            getFriendsHandler={this.getFriendsHandler}
            click={this.friendClickHandler}/>

            <button onClick={this.submitHandler}>Submit</button>
        </div>
        )
    }
}

export default App;
