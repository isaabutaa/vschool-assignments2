import React from "react"

class CreateForm extends React.Component {
    state = {
        title: "",
        description: "",
        imgUrl: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    render() {
        const {addItem} = this.props
        const newItem = {
            ...this.state
        }
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                addItem(newItem)
            }}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    name="description" 
                    value={this.state.description}
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Image Url" 
                    name="imgUrl" 
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                />
                <button>Add item</button>
            </form>
        )
    }
}

export default CreateForm