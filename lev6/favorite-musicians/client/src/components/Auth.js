import { useState } from 'react'
import AuthForm from './AuthForm.js'

// const initUserCredentials = { username: "", password: "" }

function Auth() {
    const [inputs, setInputs] = useState({ username: "", password: "" })
    const [toggler, setToggler] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevCred => ({
            ...prevCred,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // submit
    }

    return (
        <div>
            <h1>Favorite Musicians app</h1>
            {
                !toggler ?
                    <>
                        <AuthForm
                            btnText="Sign Up"
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            inputs={inputs}
                        />
                        <p onClick={setToggler(prev => !prev)}>Already a member? Login!</p>
                    </>
                :
                    <>
                        <AuthForm
                            btnText="Login"
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            inputs={inputs}
                        />
                        <p onClick={setToggler(prev => !prev)}>Not a member? Sign up!</p>
                    </>
            }
        </div>
    )
}

export default Auth