import './images/mastercard.jpeg'
import './images/visa.png'

function CreditCard (prop) {
    let logo = ''
    if(prop.type === "Visa"){
        logo = './images/visa.png'
    } else if (prop.type === "Master Card") {
        logo = './images/mastercard.jpeg'
    }
    console.log(logo)
    return(
        <div style={{backgroundColor: prop.bgColor, color: prop.color}} className='rounded m-1'>
            <div className='d-flex flex-row-reverse'>
                <img src={logo} alt='logo'/>
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