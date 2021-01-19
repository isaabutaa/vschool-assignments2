import {useState, useEffect} from "react"
import axios from "axios"
import BountyForm from "./BountyForm"
import BountyList from "./BountyList"

export default function App() {
    const [bounties, setBounties] = useState([])

    useEffect(() => {
        getBounties()
    }, [])

    function getBounties() {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
            .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                console.log(res.data)
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => err)
    }

    function editBounty(udpateObj, bountyId) {
        axios.put(`/bounties/${bountyId}`, udpateObj)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <BountyForm
                btnText="Add Bounty"
                submit={addBounty} />
            <BountyList 
                bounties={bounties}
                deleteBounty={deleteBounty}
                editBounty={editBounty} />
        </div>
    )
}