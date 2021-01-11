import React from "react"
import ThingsList from "./ThingsList"
import CreateForm from "./CreateForm"
const Axios = require("axios")

class Home extends React.Component {
    state = {
        favoriteThings: [],
        addNewItem: false,
        willEdit: false
    }

    componentDidMount() {
        this.fetchFavoriteThings()
    }

    fetchFavoriteThings = () => {
        Axios.get("https://api.vschool.io/ibn-batutta/thing")
            .then(res => this.setState({favoriteThings: res.data}))
            .catch(err => console.log(err))
    }

    toggleAddForm = () => {
        this.setState(prevState => {
            return {addNewItem: !prevState.addNewItem}
        })
    }

    addItem = (newItem) => {
        Axios.post("https://api.vschool.io/ibn-batutta/thing", newItem)
            .then(res => {
                this.setState(prevState => {
                    return {
                        favoriteThings: [...prevState.favoriteThings, res.data],
                        addNewItem: !prevState.addNewItem
                    }
                })
            })
            .catch(err => console.log(err))
    }

    updateItem = (updatedItem, id) => {
        Axios.put(`https://api.vschool.io/ibn-batutta/thing/${id}`, updatedItem)
            .then(res => {
                this.setState(prevState => ({
                    favoriteThings: prevState.favoriteThings.map(thing => thing._id !== id ? thing : res.data),
                    willEdit: !prevState.willEdit
                }))
            })
            .catch(err => console.log(err))
    }

    deleteItem = (id) => {
        Axios.delete(`https://api.vschool.io/ibn-batutta/thing/${id}`)
            .then(res => {
                this.setState(prevState => {
                    return {
                        favoriteThings: prevState.favoriteThings.filter(thing => thing._id !== id)
                    }
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const btnText = this.state.addNewItem ? "Hide form" : "Add new item"

        return (
            <main className="main-container">
                <h1>My Favorite Things</h1>
                <button onClick={this.toggleAddForm}>{btnText}</button>
                {this.state.addNewItem && <CreateForm addItem={this.addItem} />}
                <ThingsList 
                    favoriteThings={this.state.favoriteThings}
                    deleteItem={this.deleteItem}
                    updateItem={this.updateItem}
                />
            </main>
        )
    }
}

export default Home