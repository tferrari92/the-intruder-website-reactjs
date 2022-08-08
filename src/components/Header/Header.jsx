import React from "react"
import './Header.css'

export default function Header () {
    return (
        <div id="header">
            <button class="language-button" onclick="switchToEnglish()">🇬🇧</button><button class="language-button" onclick="switchToSpanish()">🇪🇸</button>
        </div>
    )
}
