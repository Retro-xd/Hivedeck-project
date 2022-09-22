import React from 'react'
import { moreInfo1, moreInfo2, moreInfo3, arrow2, arrow3, greenarrow } from '../../assets'
import Button from './Button'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

const MoreInfo = () => {

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
    data-aos-anchor-placement="top-center">

        <div className="more-info-container">
            <h2>Create, Manage and Grow</h2>

            <div className="card-group">
                <div className="card g-card">
                    <div className="card-content">
                        <img src={moreInfo1} alt="" />

                        <h2>Choose your domain name</h2>

                        <p>Link your domain name - if you already have one choose your template: start a blog, a restaurant, get access to advanced features responsive designs that work perfectly with any device of your choice.</p>
                        
                        <div className="card-btn">
                            <a href="">Get started</a>
                            <img src={greenarrow} alt="" />
                        </div>
                    </div>
                    <div className="card-arrow">
                        <img src={arrow2} alt="" />
                    </div>
                    
                </div>

                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className="card g-card right-card"
                >
                    <div className="card-arrow">
                        <img src={arrow3} alt="" />
                    </div>
                    <div className="card-content">
                        <img src={moreInfo2} alt="" />
                    
                        <h2>Generate leads and drive traffic</h2>

                        <p>Track your performance, respond to your user behaviour, and meet demands quickly with analytics and site statistics. what else can hey do? drive traffic to your website and increase conversions It's your all in one management system!</p>

                        <div className="card-btn">
                            <a href="">Get started</a>
                            <img src={greenarrow} alt="" />
                        </div>

                    </div>
                </div>

                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className="card"
                >
                    <img src={moreInfo3} alt="" />
                    
                    <h2>Stay organized and save time</h2>

                    <p>Hivedeck seamlessly intergrates with social media, gives you access to nstant articles - which works perfectly with your mobile app to increase audience.</p>

                    <div className="card-btn">
                            <a href="">Get started</a>
                            <img src={greenarrow} alt="" />
                        </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default MoreInfo