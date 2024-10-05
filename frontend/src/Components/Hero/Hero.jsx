import React from 'react'
import "./Hero.css"
import { FaArrowRight } from 'react-icons/fa'
import handIcon from "../Assets/hand_icon.png"
import Home_event from "../Assets/Event-home.jpg"

import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className="Hero-main">
      <div className="container hero-main">
        <div className="row d-flex">

          <div className="col-sm-6 hero-left-side   ">
            <h3 className='subHeading'>NEW ARRIVALS ONLY</h3>
            <h1 className='heading'>new   <img src={handIcon} className='handicon img-fluid' /> <br /> Events  <br /> for everyone</h1>

            <Link to="#"><button type="button" className="btn  herobtn">Latest Events <FaArrowRight /></button></Link>
          </div>

          <div className="col-sm-6  d-flex justify-content-center align-items-center ">
            <img src={Home_event} className='heroImage img-fluid'   ></img>
          </div>

        </div>
      </div >
    </div>
  )
}

export default Hero