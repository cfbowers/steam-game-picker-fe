import React, { Component } from 'react'
import Platforms from './Platforms/Platforms'
import Friends from './Friends/Friends'
import request from 'request'

class FilterSection extends Component {
    state = {
        friends: [], 
        selectedFriends: []
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
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
            <div>
                <input placeholder="search for friends" onChange={this.filterFriendsHandler}/>

                <Friends
                    selectedFriends={this.props.selectedFriends}
                    friends={this.state.filteredFriends ? this.state.filteredFriends : this.state.friends}
                    click={this.props.friendClickHandler}
                />
{/* 
                <Platforms 
                    names={['mac', 'linux', 'windows']} 
                    selectedPlatforms={this.state.selectedPlatforms}
                    click={this.platformClickHandler}
                />  */}

            </div>
        )
    }
}

export default FilterSection