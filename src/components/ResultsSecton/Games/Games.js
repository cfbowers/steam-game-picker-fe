import React from 'react'
import Game from './Game/Game'

const games = (props) => props.games.map(game => {
    return <Game game={game} />
}) 

export default games