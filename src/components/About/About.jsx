import React from 'react'
import './About.css'
import profile_img from '../../assets/profile.jpg'
const About = () => {
  return (
      <div id='about' className='about'>
          <div className="about-title">
              <h1>About me</h1>
          </div>
          <div className="about-sections">
              <div className="about-left">
                  <img src={profile_img} alt="img" />
              </div>
              <div className="about-right">
                  <div className="about-para">
                      <p>My passion for frontend & backend development is not reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project</p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} />     </div>
                       <div className="about-skill">  <p>Tailwind CSS</p><hr style={{width:"60%"}} /></div>
                         <div className="about-skill"> <p>React JS</p><hr style={{width:"70%"}} /></div>
                       <div className="about-skill">  <p>JavaScript</p><hr style={{width:"65%"}} /></div>
                      <div className="about-skill">  <p>Node JS</p><hr style={{ width: "45%" }} /></div>
                      
                 
                  </div>
              </div>
          </div>
          <div className="about-achievements">
            
              
                <div className="about-achievement">
                  <h1>10+</h1>
                  <p>PROJECTS COMPLETED</p>
               
              </div>   
          </div>
    </div>
  )
}
export default About

