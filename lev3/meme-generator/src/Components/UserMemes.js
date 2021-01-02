import React from "react"

export default function UserMemes(props) {
    const yourMemesTxt = props.userMemes[0] && <h2>Your memes:</h2>
    const userMemes = props.userMemes.map((meme, index) => {
        return (
            <div key={index.toString()} className="user-meme">
                <p>{meme.topTxt}</p>
                <p>{meme.bottomTxt}</p>
                <img src={meme.img} alt=""/>
            </div>
        )
    })

    return (
        <div className="user-memes-display">
            {yourMemesTxt}
            {userMemes}
        </div>
    )
}