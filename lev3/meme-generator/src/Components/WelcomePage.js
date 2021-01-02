import React from "react"

export default function WelcomePage(props) {
    return (
        <div className="welcome-page">
            <h1>Welcome to Meme-Supreme!</h1>
            <h3>What is it?</h3>
            <p>Here, you'll be able to look through randomly provided meme images, select one, and type your own text to customize it.</p>
            <button onClick={props.handleClick}>Find random meme</button>
        </div>
    )
}