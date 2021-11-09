

function Random(props) {
    return (
        <div className='border border-dark m-1'>
        <p>Random value between {props.min} and {props.max} = {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</p>
    </div>
    )
}

export default Random