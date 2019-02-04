import React from 'react'
import { Link } from 'react-router-dom'


const CatCard = ({_id, name, image, age , breed  }) => {

  return (
    <div className="card">
      <Link to={`/cats/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${image})`}}>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p> Age: {age}</p>
            <p> Breed: {breed}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CatCard
