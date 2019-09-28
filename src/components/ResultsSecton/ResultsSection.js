import React, { Component } from 'react'
import Game from './Games/Game/Game'
import Games from './Games/Games'
import request from 'request'
import './ResultsSection.css'
import { tsImportEqualsDeclaration } from '@babel/types'

class ResultsSection extends Component {
    state = { 
        games: []
    }

    constructor(props) {
        super(props)
        this.selectRandomGame = this.selectRandomGame.bind(this)
    }

    selectRandomGame() {
        if (this.props.selectedFriends.length == 2 
        && this.props.selectedFriends.includes('76561198019642313') 
        && this.props.selectedFriends.includes('76561197977157776')) {
            const game = this.state.games.find(game => game.steam_appid === 469820) 
            let genitals = []
            for (let i = 0; i < 20; i++) {
                genitals.push(game)
            }
            this.setState( { selectedGame: game, remainingGames: genitals } )
        } else {
            const games = [...this.state.games]
            const randomIndex = Math.floor(Math.random() * games.length) 
            const selectedGame = games[randomIndex]
            games.splice(randomIndex, 1)
            this.setState( { selectedGame, remainingGames: games } )
        }
    }

    componentDidMount() {
        const steamIDs = this.props.selectedFriends
        const platforms = this.props.selectedPlatforms
        request.get(`http://localhost:3001/api/games/shared?steamIDs=${steamIDs}`, (err, resp, body) => {
            this.setState({ games: JSON.parse(body) })
            this.selectRandomGame()
        })
        
    }

    render() {
        return (
            <div className="results-section">

                <div className="selected-game">
                    { this.state.selectedGame 
                        ? <Game game={this.state.selectedGame} /> 
                        : undefined
                    }
                </div>
                
                <div className="remaining-games">
                    { this.state.remainingGames 
                        ? <Games games={this.state.remainingGames}/>
                        : undefined
                    }
                </div>

                <button onClick={this.selectRandomGame}>Different Game</button>

            </div>
        )
    }
}

export default ResultsSection