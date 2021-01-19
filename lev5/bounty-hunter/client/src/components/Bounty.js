import {useState} from "react"
import BountyForm from "./BountyForm"

export default function Bounty(props) {
    const {firstName, lastName, isAlive, amount, type, _id, deleteBounty} = props
    const [toggle, setToggle] = useState(false)

    function toggler() {
        setToggle(!toggle)
    }

    return (
        <div className="bounty-card">
            {
                !toggle ?
                    <>
                        <h4>{firstName} {lastName}</h4>
                        <p>Bounty: {amount}</p>
                        <p>Type: {type}</p> 
                        <p>Status: {isAlive ? "Still alive" : "Deceased"}</p>
                        <button className="edit-btn" onClick={toggler}>Edit</button>
                        <button className="delete-btn" onClick={() => deleteBounty(_id)}>Delete</button>
                    </>
                :
                    <>
                        <BountyForm 
                            {...props} 
                            submit={props.editBounty}
                            btnText="Submit Edit" 
                        />
                        <button onClick={toggler}>Close</button>
                    </>
            }
        </div>
    )
}