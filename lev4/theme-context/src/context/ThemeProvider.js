import React, {useState} from 'react'

export const ThemeContext = React.createContext()

export default function ThemeProvider(props) {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}