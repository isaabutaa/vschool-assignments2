import React from "react"
import FavoriteThing from "./FavoriteThing"

export default function ThingsList(props) {
    return (
        <div className="list-container">
            {props.favoriteThings.map(thing => {
                return (
                    <FavoriteThing 
                        key={thing._id}
                        thing={thing}
                        deleteItem={props.deleteItem}
                        updateItem={props.updateItem}
                        editToggle={props.editToggle}
                        willEdit={props.willEdit}
                    />
                )
            })}
        </div>
    )
}