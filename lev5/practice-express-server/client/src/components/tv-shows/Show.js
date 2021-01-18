export default function Show(props) {
    const {title, genre} = props
    return (
        <div>
            <p>Title: {title}</p>
            <p>Genre: {genre}</p>
        </div>
    )
}