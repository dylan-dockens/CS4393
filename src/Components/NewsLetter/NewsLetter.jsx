import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers Straight to Your Email</h1>
      <p>Subscribe to our newsletter and stay updated on the lastest deals and products!</p>
      <div>
        <input type="email" placeholder='Your Email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
