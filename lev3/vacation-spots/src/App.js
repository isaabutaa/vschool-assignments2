import React from "react"
import VacationCard from "./VacationCard.js"

const vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
    },
    {
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    },
    {
        place: "China",
        price: 1200,
        timeToGo: "Fall"
    },
    {
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
    },
    {
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
]

export default function App() {
    return (
        <>
            <h1 style={{textAlign: "center"}}>Vacation Spots</h1>
            {
                vacationSpots.map(destination => {
                    return (
                    <VacationCard 
                        place={destination.place} 
                        price={destination.price} 
                        timeToGo={destination.timeToGo} 
                    />)})
            }
        </>
    )
}