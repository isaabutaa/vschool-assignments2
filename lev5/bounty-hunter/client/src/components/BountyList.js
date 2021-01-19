import Bounty from "./Bounty"

export default function BountyList(props) {
    return (
        <div className="bounties-container">
            {props.bounties.map(bounty => 
                <Bounty 
                    key={bounty._id} 
                    {...bounty}
                    deleteBounty={props.deleteBounty}
                    editBounty={props.editBounty} />)}
        </div>
    )
}