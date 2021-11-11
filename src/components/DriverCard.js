import Rating from './Rating';

function DriverCard(prop) {
  return (
    <div
      style={{
        backgroundColor: '#455eb5',
        color: 'white',
        borderRadius: '1.5%',
      }}
      className="d-flex flex-row justify-content-center align-items-center align-self-center m-2 p-4"
    >
      <div className="m-2" style={{ height: '7rem', width: '7rem' }}>
        <img
          style={{ height: '7rem', width: '7rem', borderRadius: '50%' }}
          src={prop.img}
          alt={prop.name}
        />
      </div>
      <div>
        <h1>{prop.name}</h1>
        <Rating>{prop.rating}</Rating>
        <p>
          {prop.car.model}-{prop.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
