import React from 'react'
import './Readmore.css'

const Readmore = ({ rm }) => {
    console.log(rm)

  const { id, title, image, description, price } = rm;

  return (
    <div className='readmecontainer'>
        <div className="conatiner">
      <span>{id}</span>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <h3>${price}</h3>
      </div>
    </div>
  );
};

export default Readmore