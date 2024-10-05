import React from 'react'
import "./DiscriptionBox.css"

const DiscriptionBox = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-2 col-sm-4 col-4  border border-2 pt-3 pb-2 text-center">
          <h6>Description</h6>
        </div>
        <div className="col-md-3 col-lg-2 col-sm-4 col-4 border border-2 pt-3 pb-2 text-center">
          <h6>Reviews(122)</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 border p-4">
          <p className='discriptionPara' >Welcome to our Event Management website, where culinary passion meets convenience! Discover a wide array of cooking classes, workshops, and culinary events tailored for all skill levels. Create and host your own cooking events, showcasing your favorite recipes and unique culinary techniques. Engage with fellow food enthusiasts through discussions, tips, and shared experiences in our vibrant community forum. </p>
          <p className='discriptionPara'>Explore our marketplace for kitchen gadgets, meal prep services, and digital cookbooks that elevate your cooking experience. Stay updated with personalized notifications about upcoming events and special offers tailored just for you. Join us today and embark on a flavorful journey of culinary discovery and creativity!

            Together, let’s make cooking an unforgettable experience!</p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox