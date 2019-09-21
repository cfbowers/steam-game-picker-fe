import React, { Component } from 'react';
import FilterSection from '../components/FilterSection/FilterSection'
import ResultsSecton from '../components/ResultsSecton/ResultsSection'
import './App.css';


class App extends Component {
    state = { 
        showResults: false,
        stateButtonText: 'Get Games',
        selectedFriends: [], 
        selectedPlatforms: [] 
    }

    startingSteamID = '76561198019642313'

    componentDidMount = () => {
        this.setState({ selectedFriends: [this.startingSteamID] })
    }

    stateButtonHandler = () => {
        const showResults = !this.state.showResults
        const newButtonText = (this.state.stateButtonText == 'Get Games') ? 'Back' : 'Get Games'
        this.setState( { showResults, stateButtonText: newButtonText} )
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
        console.log(this.state.selectedFriends)
    }

  render() {
    return (
        <div className="App">
            <header className="App-header"></header>
            { this.state.showResults 
                ? <ResultsSecton
                    selectedFriends={this.state.selectedFriends}
                    selectedPlatforms={this.state.selectedPlatforms}
                    />
                : <FilterSection 
                    startingSteamID={this.startingSteamID}
                    friendClickHandler={this.friendClickHandler} 
                    platformClickHandler={this.platformClickHandler}
                    selectedFriends={this.state.selectedFriends}
                    selectedPlatforms={this.state.selectedPlatforms}
                    />
            }
            <button onClick={this.stateButtonHandler}>{this.state.stateButtonText}</button>
        </div>
        )
    }
}

export default App;
