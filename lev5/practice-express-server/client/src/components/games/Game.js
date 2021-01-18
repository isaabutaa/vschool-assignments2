export default function Game(props) {
    const {title, type} = props
    return (
        <div>
            <p>Title: {title}</p>
            <p>Type: {type}</p>
        </div>
    )
}