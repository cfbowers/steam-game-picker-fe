import React from 'react'
import './Game.css'

const game = (props) => {
    const game = props.game
    const appID = game.appID
    const name = game.name
    const img = game.header_image

    return (
        <div className="Game" id={appID} steamid={appID} >  
            <img id="app-img" src={img} alt=""/> 
            <p id="app-name">{name}</p>
        </div>
    )
}

export default game