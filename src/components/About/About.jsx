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
                      <p>My passion for frontend development is not reflectedin my extensive experience but also in the enthusiasm and dedication I bring to each peoject</p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} />     </div>
                       <div className="about-skill">  <p>Tailwind CSS</p><hr style={{width:"60%"}} /></div>
                         <div className="about-skill"> <p>React JS</p><hr style={{width:"70%"}} /></div>
                       <div className="about-skill">  <p>JavaScript</p><hr style={{width:"60%"}} /></div>
                         <div className="about-skill">  <p>Node JS</p><hr style={{width:"50%"}} /></div>
                      
                 
                  </div>
              </div>
          </div>
          <div className="about-achievements">
              <div className="about-achievement">
                  <h1>1</h1>
                  <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
                <div className="about-achievement">
                  <h1>20+</h1>
                  <p>PROJECT COMPLETED</p>
               
              </div>   
          </div>
    </div>
  )
}
export default About

