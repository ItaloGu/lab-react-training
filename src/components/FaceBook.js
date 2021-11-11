import profiles from '../data/berlin.json'
import './IdCards.css'

function FaceBook(){


    let person = []

    for (var [key, value] of Object.entries(profiles)) {

        let isTeacher = ''

        if (value.isStudent){
            isTeacher = 'Student'
        } else {
            isTeacher = 'Teacher'
        }

        person.push(
        <div key={key} className='border border-dark d-flex flex-row m-1'>
            <img style={{height: '8rem', width: 'auto', margin: '0.3rem'}} src={value.img} alt={value.firstName} />
            <div>
                <p className='text1'><strong>First Name: </strong>{value.firstName}</p>
                <p className='text1'><strong>Last Name: </strong>{value.lastName}</p>
                <p className='text1'><strong>Country: </strong>{value.country}</p>
                <p className='text1'><strong>Type: </strong>{isTeacher}</p>
            </div>
        </div>
        )       

    }

    

    return (
        <div>
            {person}
        </div>
    )
}

export default FaceBook