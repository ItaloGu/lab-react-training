import fullStar from './img/fullStar.png'
import empityStar from './img/empityStar.png'

function Rating(prop) {

    let stars = Math.round(prop.children)
    
    let total = 5 - stars
    
    let rows = []
    for (let i = 0; i < stars; i++) {
      rows.push(<img style={{height: 'auto', width: '2.5rem'}} src={fullStar} alt='fullStar'/>)
    }
    for (let i = 0; i < total; i++) {
        rows.push(<img style={{height: 'auto', width: '2rem', margin: '4px'}} src={empityStar} alt='empityStar'/>)
      }
    


    return(
        <div>
            {rows}
        </div>
    )
}

export default Rating