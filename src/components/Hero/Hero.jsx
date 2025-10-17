import './Hero.css'
import profile_img from '../../assets/profile.jpg'
const Hero = () => {
  return (
      <div id='home' className='hero'>
      <img src={profile_img} alt="profile_img" />
      <h1><span>I'm Sabal Adhikari,</span> frontend and backend developer</h1>
      <p>I am a frontend developer from Chabahil, Kathmandu with 7+ months of experiece</p>
      <div className="hero-action">
        <div className="my-work">My work</div>
       
      </div>
    </div>
  )
}

export default Hero