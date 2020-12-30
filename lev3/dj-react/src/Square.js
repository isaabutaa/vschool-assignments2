import React from "react"

export default function Square(props) {
    // const { color } = props

    const style = {
        backgroundColor: props.color,
        width: 100,
        height: 100,
        margin: 5
    }

    return (
        <div style={style}>
        </div>
    )
}