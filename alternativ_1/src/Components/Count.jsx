

export default function MyButton({ onClick, count }) {
    

    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}