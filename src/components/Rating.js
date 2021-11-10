

function Rating(prop) {

    console.log(Math.round(prop.children))
    let total = 5 - Math.round(prop.children)
    console.log(total)
    let rows = []
    for (let i = 0; i < prop.children; i++) {
      rows.push(<i className="fas fa-star fa-2x"></i>)
    }
    for (let i = 0; i < total; i++) {
        rows.push(<i className="far fa-star fa-2x"></i>)
      }
      console.log(...rows)


    return(
        <p>{rows}</p>
    )
}

export default Rating