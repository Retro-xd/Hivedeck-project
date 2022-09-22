import React from 'react'
import { google, signup, logo } from '../../assets'
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className='signup'>
        <div className="signup-container">
            <div className="signup-image">
                <Link to='/'><img className='signup-logo' src={logo} alt="" /></Link>
                <img className='signup-img' src={signup} alt="" />
            </div>
            <div className="signup-form">
                <h2 className="signup-heading">Create your website in <br /> 5 minutes!</h2>
                <p className="signup-tagline">But first, create a Hivedeck account, have an account? <span><Link to="/login">Log in</Link></span></p>

                <form action="#">
                    <div className="google-login">
                        <img src={google} alt="" />
                        <p>Continue with Google</p>
                    </div>

                    <div className="form-or">
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>

                    <div className="fullname">
                        <p>Full name</p>
                        <input type="text" placeholder='Enter Fullname' required />
                    </div>

                    <div className="email">
                        <p>Email address</p>
                        <input type="email" placeholder='Enter Email address' required />
                    </div>

                    <div className="password">
                        <p>Password</p>
                        <input type="password" placeholder='Enter Password' required />
                    </div>

                    <p className='terms'>By creating an account you agree to our <span> <Link to='#'>Terms of Service</Link> </span> <br /> and have read our <span><Link to='#'>Privacy Policy.</Link></span></p>
                
                    <button className='signup-btn'>Sign up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup