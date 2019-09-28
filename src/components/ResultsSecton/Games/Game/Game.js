import React from 'react'
import './Game.css'

const game = (props) => {
    const game = props.game
    const appID = game.steam_appid
    const name = game.name
    const img = game.header_image

    return (
        <div className="game" id={appID} steamid={appID} >  
            <img id="app-img" src={img} alt=""/> 
            {/* <p id="app-name">{name}</p>
            <p id="app-id">{appID}</p> */}
        </div>
    )
}

export default game