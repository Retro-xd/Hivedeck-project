import React from 'react'
import { google, signup, logo } from '../../assets'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='signup'>
        <div className="signup-container">
            <div className="signup-image">
                <Link to='/'><img className='signup-logo' src={logo} alt="" /></Link>
                <img className='signup-img' src={signup} alt="" />
            </div>
            <div className="signup-form">
                <h2 className="signup-heading">Welcome back!</h2>
                <p className="signup-tagline">Log into your account, don’t an account? <span><Link to="/signup">Sign up</Link></span></p>

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

                    <div className="email">
                        <p>Email address</p>
                        <input type="email" placeholder='Enter Email address' required />
                    </div>

                    <div className="password">
                        <div className="pwd">
                          <p>Password</p>
                          <span><Link to='#'>Forgot password?</Link></span>
                        </div>
                        <input type="password" placeholder='Enter Password' required />
                    </div>
                
                    <button className='login-btn'>Log in</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login