import React, { Component } from 'react';
import './App.css';
import Friend from './Friend/Friend'
import request from 'request'


class App extends Component {
    state = {
        friends: [],
        filteredFriends: [],
        selectedFriends: []
    }

    friendClickHandler = (event) => {
        const steamID = event.target.id
        const selectedFriends = [...this.state.selectedFriends]
        const friendIndex = selectedFriends.findIndex(friend => {
            return friend === steamID
        })
        if (friendIndex >= 0) {
            selectedFriends.splice(friendIndex, 1)
        } else if (steamID) {
            selectedFriends.push(steamID)
        }
        this.setState({ selectedFriends: selectedFriends },() => {
            console.log(this.state.selectedFriends)
        })
    }

    getFriendsHandler = () => {
        console.log('clicked')
        request.get('http://localhost:3001/api/users/76561198019642313/friends', (err, resp, body) => {
            const friends = JSON.parse(body)
            if (this.state.filteredFriends.length == 0) {
                this.setState({ friends, filteredFriends: friends })
            } else {
                this.setState({ friends })
            }
        })
    }

    filterFriendsHandler = (event) => {
        const searchValue = event.target.value
        const friends = [...this.state.friends]
        const filteredFriends = friends.filter(friend => {
            return friend.nickname.toLowerCase().includes(searchValue.toLowerCase())
        })
        this.setState({ filteredFriends })
    }

  render() {
    return (
        <div className="App">
        <header className="App-header">
        </header>
            <input type="text" placeholder="Steam ID"/>
            <button onClick={this.getFriendsHandler}>Get Friends</button>
            <input placeholder="search for friends" onChange={(event) => this.filterFriendsHandler(event)}/>
            {
                (this.state.filteredFriends.length > 0) ? 
                    <div>
                        {this.state.filteredFriends.map(friend => {
                            return <Friend
                            img={friend.avatar.medium}
                            steamName={friend.nickname}
                            steamID={friend.steamID}
                            key={friend.steamID}
                            click={(event) => this.friendClickHandler(event)}
                            />
                        })}
                    </div>
                : null
            }

        </div>
        )
    }
}

export default App;
