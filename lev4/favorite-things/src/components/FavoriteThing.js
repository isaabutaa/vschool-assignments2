import React from "react"
import UpdateForm from "./UpdateForm"

class FavoriteThing extends React.Component {
    state = {
        willEdit: false
    }

    toggler = () => {
        this.setState(prevState => ({willEdit: !prevState.willEdit}))
    }

    render() {
        const {thing, deleteItem, updateItem} = this.props
        const btnText = this.state.willEdit ? "Hide edit form" : "Edit"
    
        return (
            <div className="fav-thing">
                {
                    !this.state.willEdit ?
                    <>
                        <h3>{thing.title}</h3>
                        <p>{thing.description}</p>
                    </>
                    :
                    <UpdateForm {...thing} updateItem={updateItem} />
                }
                <img src={thing.imgUrl} alt="" />
                <button onClick={this.toggler}>{btnText}</button>
                <button onClick={() => deleteItem(thing._id)}>Delete</button>
            </div>
        )
    }
}

export default FavoriteThing