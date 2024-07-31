import './homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital'/>

      {/* left side - homepage */}
      <div className="left">
        <h1>CHAT AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>

      {/* right side - homepage */}
      <div className="right"></div>
    </div>
  )
}

export default Homepage