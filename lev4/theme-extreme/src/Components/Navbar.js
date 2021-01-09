import React from "react"

export default function Navbar(props) {
    const {theme} = props
    return (
        <nav className={`nav-container ${theme}`}>
            <ul>
                <li className={`${theme}-font`}>Home</li>
                <li className={`${theme}-font`}>About</li>
                <li className={`${theme}-font`}>Contact</li>
            </ul>
        </nav>
    )
}