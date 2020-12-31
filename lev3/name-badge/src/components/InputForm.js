import React from "react"
import Badge from "./Badge.js"

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            badges: [],
            details: {
                firstName: "",
                lastName: "",
                birthPlace: "",
                favoriteFood: "",
                email: "",
                phoneNumber: "",
                about: "Tell us about yourself... "
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState( prevState => {
            return {
                details: {
                    ...prevState.details, 
                    [name]: value 
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                badges: [...prevState.badges, prevState.details],
                details: {
                    firstName: "",
                    lastName: "",
                    birthPlace: "",
                    favoriteFood: "",
                    email: "",
                    phoneNumber: "",
                    about: "Tell us about yourself..."
                }
            }
        })
    }

    render() {
        
        return (
            <div className="home-container">
                <h1>Name Badge</h1>
                <form className="input-form" onSubmit={this.handleSubmit}>
                    <div className="inputs-container">
                        <input 
                            type="text"
                            className="left input-field" 
                            placeholder="First Name" 
                            name="firstName" 
                            value={this.state.details.firstName} 
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="text" 
                            className="right input-field"
                            placeholder="Last Name" 
                            name="lastName" 
                            value={this.state.details.lastName} 
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="text"
                            className="left input-field" 
                            placeholder="Place of Birth" 
                            name="birthPlace" 
                            value={this.state.details.birthPlace} 
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="text"
                            className="right input-field" 
                            placeholder="Favorite Food" 
                            name="favoriteFood" 
                            value={this.state.details.favoriteFood} 
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="text"
                            className="left input-field" 
                            placeholder="Email" 
                            name="email" 
                            value={this.state.details.email} 
                            onChange={this.handleChange} 
                        />
                        <input 
                            type="tel"
                            className="right input-field" 
                            placeholder="(123) 456-7890" 
                            name="phoneNumber" 
                            value={this.state.details.phoneNumber} 
                            onChange={this.handleChange} 
                        />
                        <textarea 
                            type="text"
                            className="about-input input-field" 
                            name="about" 
                            value={this.state.details.about} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                {this.state.badges.map((badge, index) => <Badge key={index} badge={badge} />)}
            </div>
        )   
    }
}

export default InputForm