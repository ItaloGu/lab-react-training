import Visa from './img/visa.png';
import MasterCard from './img/master-card.svg';

function CreditCard(prop) {
  let logos = '';
  if (prop.type === 'Visa') {
    logos = (
      <img
        style={{ height: 'auto', width: '2.5rem' }}
        className="m-2"
        src={Visa}
        alt="Visa"
      />
    );
  } else if (prop.type === 'Master Card') {
    logos = (
      <img
        style={{ height: 'auto', width: '2rem' }}
        className="m-2"
        src={MasterCard}
        alt="Master Card"
      />
    );
  }

  return (
    <div
      style={{ backgroundColor: prop.bgColor, color: prop.color }}
      className="rounded m-1"
    >
      <div className="d-flex flex-row-reverse">{logos}</div>
      <div>
        <p className="fs-2 mx-5 my-3 text-nowrap">
          &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
          &#8226;&#8226;&#8226;&#8226; {prop.number.slice(-4)}
        </p>
      </div>
      <div>
        <p className="m-1 text-start">
          Expires: {prop.expirationMonth}/
          {prop.expirationYear.toString().slice(-2)} {prop.bank}
        </p>
        <p className="m-1 text-start">{prop.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
