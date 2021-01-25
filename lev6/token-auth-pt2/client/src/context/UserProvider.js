import React, {useState} from "react"

export const userContext = React.createContext()

export default function UserProvider(props) {
    const initState = { 
        user: {}, 
        token: "", 
        todos: [] 
    }
    const [userState, setUserState] = useState(initState)

    return (
        <userContext.Provider value={{...userState}}>
            { props.children }
        </userContext.Provider>
    )
}