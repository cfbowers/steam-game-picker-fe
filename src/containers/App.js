import React, { Component } from 'react';
import './App.css';

import Friends from '../components/Friends/Friends'
import FriendsControlls from '../components/Friends/FriendsControls/FriendsControls'
import request from 'request'

class App extends Component {
    state = { friends: [], selectedFriends: [] }

    friendClickHandler = (event) => {
        const steamID = event.target.id
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

  render() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <FriendsControlls getFriends={this.getFriendsHandler} filterFriends={this.filterFriendsHandler} /> 
            <Friends
                selectedFriends={this.state.selectedFriends}
                friends={this.state.filteredFriends ? this.state.filteredFriends : this.state.friends}
                getFriendsHandler={this.getFriendsHandler}
                click={this.friendClickHandler}
            />
        </div>
        )
    }
}

export default App;
