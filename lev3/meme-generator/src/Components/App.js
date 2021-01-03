import React from "react"
import WelcomePage from "./WelcomePage.js"
import RandomMemeDisplay from "./RandomMemeDisplay"
import MemeForm from "./MemeForm.js"
import UserMemes from "./UserMemes.js"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userMemes: [],
            memeDetails: {
                topTxt: "",
                bottomTxt: "",
                img: ""
            },
            apiMemes: [],
            randomMeme: {},
            willCustomize: false,
            edit: false
        }

        this.handleRandomMeme = this.handleRandomMeme.bind(this)
        this.handleWillCustomize = this.handleWillCustomize.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.toggleEdit = this.toggleEdit.bind(this)
        // this.handleEdit = this.handleEdit.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    apiMemes: response.data.memes
                })
            })
            .catch(err => console.log(err))
    }

    handleRandomMeme() {
        const randomIndex = Math.floor(Math.random() * this.state.apiMemes.length)
        const randomMeme = this.state.apiMemes[randomIndex]
        this.setState({randomMeme: randomMeme})
    }
    
    handleWillCustomize() {
        this.setState({
            willCustomize: !this.state.willCustomize
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState(prevState => {
            return {
                memeDetails: {
                    ...prevState.memeDetails,
                    [name]: value,
                    img: prevState.randomMeme.url
                }
            }      
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                userMemes: [...prevState.userMemes, prevState.memeDetails],
                memeDetails: {
                    topTxt: "",
                    bottomTxt: "",
                    img: ""
                },
                randomMeme: {},
                willCustomize: !prevState.willCustomize
            }
        })
    }

    // toggleEdit() {
    //     this.setState({
    //         edit: !this.state.edit
    //     })
    // }

    // handleEdit(event) {
       
    // }

    // handleDelete(memeIndex) {
    //     this.setState(prevState => {
    //         prevState.userMemes.splice(memeIndex, 1)
    //         return {
    //             userMemes: prevState.userMemes
    //         }
    //     })
    // }

    render() {

        const memeForm = this.state.willCustomize && <MemeForm 
                                                        handleChange={this.handleChange} 
                                                        handleSubmit={this.handleSubmit} 
                                                        memeDetails={this.state.memeDetails} 
                                                     />

        return (
            <div>
                <WelcomePage handleClick={this.handleRandomMeme} />
                <RandomMemeDisplay 
                    randomMeme={this.state.randomMeme} 
                    handleClick={this.handleWillCustomize} 
                />
                {memeForm}
                <UserMemes
                    state={{...this.state}}
                    userMemes={this.state.userMemes} 
                    toggleEdit={this.toggleEdit} 
                    willEdit={this.state.edit} 
                    handleEdit={this.handleEdit} 
                    handleDelete={this.handleDelete} 
                />
            </div>
        )
    }
}

export default App