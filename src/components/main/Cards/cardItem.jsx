import React from 'react';

const cardItem = ({ img, name }) => {
  return (
    
    <card className='card-item mt-4 rounded'>
      <div className="card text-white">
        <img className="card-img rounded" src={img} alt="Card image"/>
          <div className="card-img-overlay">
            <a href="/">
            <h5 className="card-title text-center text-dark mt-5">{name}</h5>
            </a>
          </div>
      </div>
    </card>

  )
}

export default cardItem