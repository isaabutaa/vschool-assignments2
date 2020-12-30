import React from "react"
import Square from "./Square.js"
import Button from "./Button.js"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: ["#FF00FF", "#00FF00", "#FF6700", "#FF0000"]
        }
        this.blackOrWhite = this.blackOrWhite.bind(this)
        this.topHalf = this.topHalf.bind(this)
        this.bottomLeft = this.bottomLeft.bind(this)
        this.bottomRight = this.bottomRight.bind(this)
    }

    // methods to change the squares to different colors using click events to set state

    blackOrWhite() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map(color => color !== "white" ? "white" : "black")
            }
        })
    }

    topHalf() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map((color, i) => i < 2 ? "#1E90FF" : color)
            }
        })
    }

    bottomLeft() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map((color, i) => i === 2 ? "#FFFF00" : color)
            }
        })
    }

    bottomRight() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map((color, i) => i === prevState.colors.length - 1 ? "#4B0082" : color)
            }
        })
    }

    render() {
        const squareComponents = this.state.colors.map((color, i) => <Square key={i} color={color} />)

        return (
            <div>
                <h1 className="title">DJ React</h1>
                <div className="squares-container">
                    {squareComponents}
                </div>
                <div className="btns-container">
                    <Button btnText="Black/White" handleClick={this.blackOrWhite}/>
                    <Button btnText="Top-half" handleClick={this.topHalf} />
                    <Button btnText="Bottom-left" handleClick={this.bottomLeft}/>
                    <Button btnText="Bottom-right" handleClick={this.bottomRight}/>
                </div>
            </div>  
        )
    }
}

export default App