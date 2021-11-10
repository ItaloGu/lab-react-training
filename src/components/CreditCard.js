import './img/visa.png'
import './img/master-card.svg'

function CreditCard (prop) {
    let logos = ''
    if(prop.type === "Visa"){
        logos = <img className='m-2' src='./img/visa.png' alt='Visa'/>
    } else if (prop.type === "Master Card") {
        logos = <img className='m-2' src='./img/master-card.svg' alt='Master Card'/>
    }
    console.log(logos)
    return(
        <div style={{backgroundColor: prop.bgColor, color: prop.color}} className='rounded m-1'>
            <div className='d-flex flex-row-reverse'>
                {logos}
            </div>
            <div>
                <p className='fs-2 mx-5 my-3 text-nowrap'>&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; {prop.number.slice(-4)}</p>
            </div>
            <div>
                <p className='m-1 text-start'>Expires: {prop.expirationMonth}/{prop.expirationYear.toString().slice(-2)}      {prop.bank}</p>
                <p className='m-1 text-start'>{prop.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard