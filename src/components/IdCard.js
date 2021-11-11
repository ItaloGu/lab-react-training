import './IdCards.css';

function IdCard(prop) {
  let date = prop.birth.toString().slice(0, 15);

  return (
    <div className="d-flex flex-row border border-dark m-1">
      <img
        className="m-1"
        style={{ height: '10rem', width: '10rem' }}
        src={prop.picture}
        alt="user"
      />
      <div className="d-flex flex-column text-start">
        <p className="text1">
          <strong>First name: </strong>
          {prop.firstName}
        </p>
        <p className="text1">
          <strong>Last name: </strong>
          {prop.lastName}
        </p>
        <p className="text1">
          <strong>Gender: </strong>
          {prop.gender}
        </p>
        <p className="text1">
          <strong>Height: </strong>
          {prop.height}
        </p>
        <p className="text1">
          <strong>Birth: </strong>
          {date}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
