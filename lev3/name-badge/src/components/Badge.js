import React from "react"

export default function Badge(props) {
    const {firstName, lastName, birthPlace, favoriteFood, email, phoneNumber, about} = props.badge
    return (
        <div className="badge">
            <span className="color-header">Badge:</span>
            <p className="left input-field">Name: {`${firstName} ${lastName}`}</p>
            <p className="right input-field">Place of Birth: {birthPlace}</p>
            <p className="left input-field">Favorite Food: {favoriteFood}</p>
            <p className="right input-field">Email: {email}</p>
            <p className="left input-field">Phone Number: {phoneNumber}</p>
            <div className="about-section input-field">About me: {about}</div>
        </div>
    )
}