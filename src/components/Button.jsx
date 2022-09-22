import React from 'react'
import { greenarrow } from '../../assets'

const Button = ({title, style}) => {
  return (
    <div>
        <button style={{style}} href="#" className="button">
          {title}
          <img src={greenarrow} alt="" />
        </button>
    </div>
  )
}

export default Button