import React from "react"
import './Hero.css'

export default function Hero () {
    return (
        <div id="hero">
            <div id="titles-buttons">
                <h3 id="Welcome-to">Welcome to</h3>
                <h1 id="The-Intruder">The Intruder</h1>
                <h3 id="Party-Game">Party Game</h3>
                <div id="buttons">
                    <button id="app-store" type="button" onclick="location.href = 'https://apps.apple.com/us/app/the-intruder-party-game/id1593882611';"></button>
                    <button id="google-play"></button>
                </div>
                <h5 id="Get-it-now">Get it now for free!</h5>
            </div>
            <div>
                <img id="logo" src="/src/assets/3d-stripy-man-in-hat-wirh-raised-arms-sitting.png" alt="The Intruder Logo" />
            </div>
        </div>
    )    
}   
    