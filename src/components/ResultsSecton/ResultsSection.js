import React, { Component } from 'react'
import Games from './Games/Games'
import request from 'request'

class ResultsSection extends Component {
    state = { 
        games: []
    }

    constructor(props) {
        super(props)
        // const games = 
    }

    render() {
        return (
            <div>
                {/* <Games games={this.state.games} />  */}
            </div>
        )
    }
}

export default ResultsSection