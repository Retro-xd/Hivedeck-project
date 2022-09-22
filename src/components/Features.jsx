import React from 'react'
import { rightArrow, featuresImage } from '../../assets'

const Features = () => {

  return (
    <section className='features-section'>
        <div className="features-container">
            <div className="circle3"></div>
            <div className="features-content">
                <h2>Features you get</h2>
                <div className="features">

                    <div className="feature">
                        <div className="feature-arrow">
                            <img src={rightArrow} alt="" />
                        </div>
                        <div className="feature-text">
                            <h4>Third-party connection</h4>
                            <p>Easily connect and work with third-party apps</p>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="feature-arrow">
                            <img src={rightArrow} alt="" />
                        </div>
                        <div className="feature-text">
                            <h4>Payment</h4>
                            <p>Multipayment intergration option</p>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="feature-arrow">
                            <img src={rightArrow} alt="" />
                        </div>
                        <div className="feature-text">
                            <h4>Page analytics</h4>
                            <p>Measure open, views, and clicks in real time</p>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="feature-arrow">
                            <img src={rightArrow} alt="" />
                        </div>
                        <div className="feature-text">
                            <h4>One account</h4>
                            <p>Do it all from your Hivedeck account</p>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="feature-arrow">
                            <img src={rightArrow} alt="" />
                        </div>
                        <div className="feature-text">
                            <h4>Templates</h4>
                            <p>Select and customize your templates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-image">
                <img src={featuresImage} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Features