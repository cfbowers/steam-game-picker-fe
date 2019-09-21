import React, { Component } from 'react'
import Games from './Games/Games'
import request from 'request'

class ResultsSection extends Component {
    state = { 
        games: []
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        const steamIDs = this.props.selectedFriends
        const platforms = this.props.selectedPlatforms
        request.get(`http://localhost:3001/api/games/shared?steamIDs=${steamIDs}`, (err, resp, body) => {
            this.setState({ games: JSON.parse(body) })
        })
    }

    render() {
        return (
            <div>
                <Games games={this.state.games} /> 
            </div>
        )
    }
}

export default ResultsSection