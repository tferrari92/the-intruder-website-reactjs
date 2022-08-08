import React from "react"

export default function Footer () {
    return (
        <div id="footer">
            <div id="links">
                <a id="Game-rules" onclick="redirectToAppropiateRules()">Rules</a>
                <a id="Terms" onclick="redirectToAppropiateTerms()">Terms and conditions</a>
                <a href="https://icons8.com/" id="Icons">Icons by Icons8</a>
            </div>
        </div>
    )
}
