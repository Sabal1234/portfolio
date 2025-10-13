import React from 'react'
import './About.css'
import profile_img from '../../assets/profile.jpg'
const About = () => {
  return (
      <div className='about'>
          <div className="about-title">
              <h1>About me</h1>
              <img src="" alt="img" />
          </div>
          <div className="about-sections">
              <div className="about-left">
                  <img src={profile_img} alt="img" />
              </div>
              <div className="about-right">
                  <div className="about-para">
                      <p></p>
                      <p></p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill">
                          <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                          <p>React JS</p><hr style={{width:"70%"}} />
                          <p>JavaScript</p><hr style={{width:"60%"}} />
                          <p>Node JS</p><hr style={{width:"50%"}} />
                          <p></p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About
