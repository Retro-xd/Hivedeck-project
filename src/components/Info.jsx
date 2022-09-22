import React from 'react'
import Button from './Button'
import { infoImage } from '../../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Info = () => {

  useEffect(() => {
    Aos.init({ })
  }, [])

  return (
    <section data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" className='info-section'>
        <div className="info-container">
            <div className="info-content">
                <h2>Build the website you want, for free.</h2>

                <p>Get access to customizable templates and features that represent your ideas and intentions perfectly Distinguish your brand, get discovered with a high quality website and grow your customer base. It's that easy!</p>

                <Button title='See Templates' />
            </div>

            <div className="info-image-container">
                <div></div>
                <img className='info-image' src={infoImage} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Info