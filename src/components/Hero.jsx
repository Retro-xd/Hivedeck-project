import React from 'react'
import Button from './Button'
import { heroImage, heroheadcircle, heroheadline } from '../../assets'
import { heroImageRectangle } from '../../assets'

const Hero = () => {

  return (
    <section>
      <div className="hero-container section-padding">
        <div className="hero-content">
          <h2>
            <img className='h2-image1' src={heroheadcircle} alt="" />
            <img className='h2-image2' src={heroheadline} alt="" />
            Create your website in minutes! <br /> No coding required!
          </h2>

          <p>Hivedeck makes it simple to create an online presence your way, <br /> now that the hard work is out of the way</p>

          <Button title='Get started' />
        </div>
        
        <div className="hero-image-container">
          <img className='hero-image-rectangle' src={heroImageRectangle} alt="" />
          <img className='hero-image' src={heroImage} alt="" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero