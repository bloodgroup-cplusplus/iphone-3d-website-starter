import React from 'react'
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand.png"

export default function Jumbotron() {
    const handleLearnMore = () =>{
        const element = document.querySelector(".sound-section")
        window.scrollTo({
            top:element.getBoundingClientRect().top,
            left: 0 , 
            behaviour: 'smooth'

        })
    }
  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className='logo' src={Iphone} alt="iphone 14 pro" />
        <p className='text'>Big and Bigger</p>
        <span className='description'>
            From $41.521/mo. for 11 months . or $499 before trade-in
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>


            <li>
                <a className='link' onClick={handleLearnMore}>Learn More</a>
            </li>

        </ul>
        <img className='iphone-img' src={HoldingIphone} alt="iPhone"/>




    </div>
  )
}
