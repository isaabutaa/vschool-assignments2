import React from "react"

export default function Main(props) {
    const {theme, toggleTheme} = props
    return (
        <main className={`main-container ${theme}-font`}>
            <h1>Theme-Extreme</h1>
            <h2>Click the button to toggle the Theme</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </main>
    )
}