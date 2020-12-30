import React from "react"
import Die from "./Die.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [null, null, null, null, null, null],
            classNames: [null, null, null, null, null, null]
        }
        this.changeAllDice = this.changeAllDice.bind(this)
    }

    changeAllDice() {
        this.setState(prevState => {
            console.log(this.state.numbers)
            return {
                numbers: prevState.numbers.map(number => Math.floor(Math.random() * 6) + 1),
                classNames: prevState.classNames.map((className, index) => {
                    if(this.state.numbers[index] === 1) {
                        return "first-face"
                    } else if(this.state.numbers[index] === 2) {
                        return "second-face"
                    } else if(this.state.numbers[index] === 3) {
                        return "third-face"
                    } else if(this.state.numbers[index] === 4) {
                        return "fourth-face"
                    } else if(this.state.numbers[index] === 5) {
                        return "fifth-face"
                    } else if(this.state.numbers[index] === 6) {
                        return "sixth-face"
                    }
                })
            }
        })
    }

    render() {

        return (
            <div className="container">
                <div className="dice-container">
                    {this.state.numbers.map((number, index) => {
                        return <Die key={index} dieClass={this.state.classNames[index]} />
                    })}
                </div>
                <button onClick={this.changeAllDice}>Roll the Dice</button>
            </div>
        )
    }
}

export default App