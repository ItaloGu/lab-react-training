import profiles from '../data/berlin.json';
import './IdCards.css';
import FaceBook2 from './FaceBook2';

function FaceBook() {
  let person = [];

  for (let [key, value] of Object.entries(profiles)) {

    person.push(
      <div key={key} className="border border-dark d-flex flex-row m-1">
        <img
          style={{ height: '8rem', width: 'auto', margin: '0.3rem' }}
          src={value.img}
          alt={value.firstName}
        />
        <div className='m-1'>
          <p className="text1">
            <strong>First Name: </strong>
            {value.firstName}
          </p>
          <p className="text1">
            <strong>Last Name: </strong>
            {value.lastName}
          </p>
          <p className="text1">
            <strong>Country: </strong>
            {value.country}
          </p>
          <p className="text1">
            <strong>Type: </strong>
            {value.isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <FaceBook2 />
      {person}
    </div>
  );
}

export default FaceBook;
