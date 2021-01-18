import React from "react"

export default function Movie(props) {
    const {title, genre} = props
    return (
        <div>
            <p>Title: {title}</p>
            <p>Genre: {genre}</p>
        </div>
    )
}