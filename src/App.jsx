import React from 'react'
import './style.css'
import { Navbar, Hero, Info, MoreInfo, Features, CTA, RandomImage, Footer } from './components'
import { yellowStar } from '../assets'
import Signup from './pages/Signup';
import Login from './pages/Login'

const App = () => {
  return (
        <>
            <div className='black-bg'>
                <div className="circle1"></div>
                <div className="star1">
                    <img src={yellowStar} alt="" />
                </div>
                <div className="star2">
                    <img src={yellowStar} alt="" />
                </div>
                <Navbar />
                <Hero />
            </div>

            <div>
                <Info />
                <MoreInfo />
                <Features />
                <CTA />
                <RandomImage />
                <Footer />
            </div>
        </>
    )
}

export default App