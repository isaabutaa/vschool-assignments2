import React from "react"

export default function UserMemes(props) {
    
    const yourMemesTxt = props.userMemes[0] && <h2>Your memes:</h2>
    const userMemes = props.userMemes.map((meme, index) => {
        return (
            <div key={index.toString()} className="user-meme">
                {props.willEdit ? 
                <>
                    <input className="top-txt" type="text" value={meme.topTxt} name="topTxt" onChange={props.handleEdit} />
                    <input className="bottom-txt" type="text" value={meme.bottomTxt} name="bottomTxt" onChange={props.handleEdit} />
                </>
                :
                <>
                    <p className="top-txt">{meme.topTxt}</p>
                    <p className="bottom-txt">{meme.bottomTxt}</p>
                </>
                }
                <img className="user-meme-img" src={meme.img} alt=""/>
                <button className="btn edit-btn" onClick={props.toggleEdit}>Edit</button>
                <button className="btn delete-btn" onClick={() => props.handleDelete(index)}>Delete</button>
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