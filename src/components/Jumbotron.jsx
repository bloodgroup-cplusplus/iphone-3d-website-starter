import React from 'react'
import Iphone from "../assets/images/iphone-14.jpg"

export default function Jumbotron() {
  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className='logo' src={Iphone} alt="iphone 14 pro" />
        <p className='text'>Big and Bigger</p>
        <span className='description'>
            From $41.521/mo. for 11 months . or $499 before trade-in
        </span>




    </div>
  )
}
