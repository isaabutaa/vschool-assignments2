import React from "react"

export default function Button(props) {
    return (
        <button onClick={props.handleClick} className="btn">{props.btnText}</button>
    )
}