import React from 'react'
import { logo2, twitter, facebook, instagram } from '../../assets'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <img src={logo2} alt="" />
            <p>hello@hivedeck.com</p>
            <div className="social-media">
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-1">
              <h4>Templates</h4>
              <p>New</p>
              <p>Trending</p>
              <p>Blog</p>
              <p>Restuarant</p>
            </div>
            
            <div className="footer-right-2">
              <h4>Company</h4>
              <p>About</p>
              <p>Contact Us</p>
            </div>

            <div className="footer-right-3">
              <h4>Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms of use</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2022 Hivedeck All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer