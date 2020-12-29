import React from "react"

export default function Friend(props) {
    const {name, age, pets} = props
    return (
        <div className="friend">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {pets.map(pet => {
                return (
                    <>
                        <p>Pet name: {pet.name}</p>
                        <p>Pet breed: {pet.breed}</p>
                    </>
                )
            })}
        </div>
    )
}