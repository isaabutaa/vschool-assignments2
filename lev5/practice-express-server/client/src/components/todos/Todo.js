export default function Todo(props) {
    const {name, description, isCompleted, _id} = props
    
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    )
}