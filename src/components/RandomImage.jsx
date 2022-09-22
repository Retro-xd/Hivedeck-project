import React from 'react'
import { randomImage } from '../../assets'

const RandomImage = () => {
  return (
    <div>
        <div className="random-image-container">
            <div></div>
            <img src={randomImage} alt="" />
        </div>
    </div>
  )
}

export default RandomImage