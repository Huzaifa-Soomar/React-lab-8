import React from 'react'

const productCard = (props) => {
    const {title , desc , price ,img} = props;
  return (
    <div>
        <p> {img} </p>
      <p> {title} </p>
      <p> {desc} </p>
      <p> {price} </p>

    </div>
  )
}

export default productCard
