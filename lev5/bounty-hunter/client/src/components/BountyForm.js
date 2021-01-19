import {useState} from "react"

export default function BountyForm(props) {
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        isAlive: props.isAlive || true,
        amount: props.amount || "",
        type: props.type || ""
    }

    const [userInputs, setUserInputs] = useState(initInputs)

    function handleChange(event) {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name
        setUserInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.submit(userInputs, props._id)
        setUserInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={userInputs.firstName} 
                placeholder="First Name" 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="lastName" 
                value={userInputs.lastName} 
                placeholder="Last Name" 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="type" 
                value={userInputs.type} 
                placeholder="Type - e.g. Jedi, Sith, Mutant, Wizard..." 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="amount" 
                value={userInputs.amount} 
                placeholder="Bounty amount" 
                onChange={handleChange} 
            />
            <label>
                Alive ?
                <input 
                    type="checkbox" 
                    name="isAlive" 
                    value={userInputs.isAlive}
                    checked={userInputs.isAlive}
                    onChange={handleChange} 
                />
            </label>
            <button>{props.btnText}</button>
        </form>
    )
}