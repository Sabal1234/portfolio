import './Hero.css'
import profile_img from '../../assets/profile.jpg'
const Hero = () => {
  return (
      <div className='hero'>
      <img src={profile_img} alt="profile_img" />
      <h1><span>I'm Sabal Adhikari,</span> frontend developer based in Nepal</h1>
      <p>I am a frontend developer from Chabahil, Kathmandu with 2 years of experiece</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero