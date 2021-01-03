import React from "react"

class UserMemes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.state
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    toggleEdit() {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleEdit(event) {
        const { name, value } = event.target
        // this.setState(prevState => {
        //     return {
        //         userMemes: prevState.userMemes.map((meme, index) => {
        //            if(index === editIndex) {
        //                return {
        //                    [name]: value
        //                }
        //            }
        //            return meme
        //        }) 
        //    }
        // })
    }

    handleDelete(memeIndex) {
        this.setState(prevState => {
            prevState.userMemes.splice(memeIndex, 1)
            return {
                userMemes: prevState.userMemes
            }
        })
    }


    render() {
        const yourMemesTxt = this.state.userMemes[0] && <h2>Your memes:</h2>
        const userMemes = this.state.userMemes.map((meme, index) => {
            return (
                <div key={index.toString()} className="user-meme">
                    {this.state.edit ? 
                    <form>
                        <input className="top-txt" type="text" value={meme.topTxt} name="topTxt" onChange={() => this.handleEdit(index)} />
                        <input className="bottom-txt" type="text" value={meme.bottomTxt} name="bottomTxt" onChange={() => this.handleEdit(index)} />
                    </form>
                    :
                    <>
                        <p className="top-txt">{meme.topTxt}</p>
                        <p className="bottom-txt">{meme.bottomTxt}</p>
                    </>
                    }
                    <img className="user-meme-img" src={meme.img} alt=""/>
                    <button className="btn edit-btn" onClick={this.toggleEdit}>Edit</button>
                    <button className="btn delete-btn" onClick={() => this.handleDelete(index)}>Delete</button>
                </div>
            )
        })
    
        return (
            <div className="user-memes-display">
                {yourMemesTxt}
                {userMemes}
            </div>
        )
    }
}

export default UserMemes