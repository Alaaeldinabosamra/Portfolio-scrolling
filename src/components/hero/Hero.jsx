import React from 'react'
import "./hero.css"

function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className="parent-avatar flex">
          <img src="./images/myPic.png" alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <h1 className='title'>Software designer, founder and amateur astronaut</h1>
        <p className='sub-title'>I'm Alaaeldin Abousamra, a software designer and entrepreneur based in Port Said City. I'm the founder and CEO of Samraspace, where we develop technologies that empower regular people to explore space on there own terms.</p>
        <div className="all-icons flex">
          <div className="icon icon-twitter-square"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className='right-section animation'>

      </div>
    </section>
  )
}

export default Hero