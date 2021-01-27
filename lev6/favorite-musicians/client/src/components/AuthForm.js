
export default function AuthForm(props) {
    const {
        btnText,
        handleChange,
        handleSubmit,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                placeholder="Username" 
                name="username" 
                value={username} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                placeholder="Password" 
                name="password" 
                value={password} 
                onChange={handleChange} 
            />
            <button>{btnText}</button>
        </form>
    )
}