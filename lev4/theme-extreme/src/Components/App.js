import React from "react"
import Navbar from "./Navbar.js"
import Main from "./Main.js"
import Footer from "./Footer.js"

import {ThemeContext} from "../Context/themeContext.js"

export default function App() {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <div className={`app-container ${theme}-body`}>
                    <Navbar theme={theme} />
                    <Main theme={theme} toggleTheme={toggleTheme} />
                    <Footer theme={theme} />
                </div>
            )}    
        </ThemeContext.Consumer>
    )
}