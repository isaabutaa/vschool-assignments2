import React from "react"

class UpdateForm extends React.Component {
    state = {
        updatedObj: {
            title: this.props.title,
            description: this.props.description,
            imgUrl: this.props.imgUrl
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(prevState => {
            return {
                updatedObj: {
                    ...prevState.updatedObj,
                    [name]:value
                }
            }
        })
    }

    render() {
    const {_id, updateItem} = this.props
    const updatedObj = {...this.state.updatedObj}

        return (
            <form 
                onSubmit={(e) => {
                e.preventDefault()
                updateItem(updatedObj, _id)}}
                className="update-form"
            >
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={this.state.updatedObj.title}
                    onChange={this.handleChange}
                />
                <textarea
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={this.state.updatedObj.description}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Image Url"
                    name="imgUrl"
                    value={this.state.updatedObj.imgUrl}
                    onChange={this.handleChange}
                />
                <button>Submit edit</button>
            </form>
        )
    }
}

export default UpdateForm