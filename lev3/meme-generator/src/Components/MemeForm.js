import React from "react"

export default function MemeForm(props) {
    return (
        <div className="form-container">
            <form className="meme-form" onSubmit={props.handleSubmit}>
                <label>
                    Type the text you want at the top of the meme:
                    <input 
                        type="text" 
                        name="topTxt" 
                        value={props.memeDetails.topTxt} 
                        onChange={props.handleChange}
                    />
                </label>
                <label>
                    Type the text you want at the bottom of the meme:
                    <input 
                        type="text" 
                        name="bottomTxt" 
                        value={props.memeDetails.bottomTxt} 
                        onChange={props.handleChange}
                    />
                </label>
                <button type="submit">Create this meme</button>
            </form>
        </div>
    )
}