import React from "react"

export default function RandomMemeDisplay(props) {

    const customizeBtn = props.randomMeme.url && <button className="customize-btn" onClick={props.handleClick}>Customize meme</button>

    return (
        <div className="api-memes-container">
            <img src={props.randomMeme.url} alt="" />
            {customizeBtn}
        </div>
    )
}