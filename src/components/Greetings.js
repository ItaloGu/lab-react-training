

function Greetings(prop){
    return(
        <div className='border border-dark m-1'>
            <p lang={prop.lang}>Oi {prop.children}</p>
        </div>
    )
}

export default Greetings