import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.Laxmi} className='logo1' alt="" />
            <p>We use Functionality Cookies, that allow our Site to remember the choices you make when you visit our Site in order to provide enhanced, more personalized features to you.</p>
           <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9827034152</li>
                <li>ind.laxmipriya@gmail.com</li>
            </ul>
        </div>
    </div>
    <p className="footer-copyright">Copyright 2️⃣0️⃣2️⃣5️⃣ © 𝓁𝒶𝓍𝓂𝒾𝓅𝓇𝒾𝓎𝒶 - All Right Reserved.</p>
      <hr />
    </div>
  )
}

export default Footer
