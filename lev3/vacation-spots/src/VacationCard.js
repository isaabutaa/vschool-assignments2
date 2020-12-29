import React from "react"

export default function VacationCard(props) {
    const {place, price, timeToGo} = props
    return (
        <div className="vacation-card">
            <h3>{place}</h3>
            <p>{price}</p>
            <p>{timeToGo}</p>
        </div>
    )
}