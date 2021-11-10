import {useState} from 'react'

function Carousel(props) {

    const [counter, setCounter] = useState(0)

    function handleIncrement() {
        setCounter(counter + 1);
        
      }

    function handleDecrement() {
        setCounter(counter - 1);
        
    }
  

    return(
        <div className='d-flex flex-row align-self-end align-items-end'>
            <button onClick={handleDecrement}>Left</button>
            <img src={props.imgs[Math.abs(counter) % props.imgs.length]} alt='images' />
            <button onClick={handleIncrement}>Right</button>
        </div>
    )
}

export default Carousel