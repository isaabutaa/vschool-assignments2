import React from "react"
import ReactDOM from "react-dom"
import "./Style.css"
import App from "./Components/App.js"
import {ThemeContextProvider} from "./Context/themeContext.js"

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, 
    document.getElementById("root")
)