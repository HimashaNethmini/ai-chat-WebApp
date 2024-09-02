import './homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from "react-type-animation";
import { useState } from 'react';

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  //taking credentials to homepage
  const test = async () => {
    await fetch ("http://localhost:3000/api/test", {
      credentials: "include",
    });
  };

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
      <div className="right">
        <div className="imgContainer">
          {/* animated bg */}
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          {/* ends here */}
          <img src="/bot.png" alt="" className='bot'/>
          
{/* chat bot wording animations */}
          <div className="chat">
            <img 
              src=
              {
                typingStatus === "human1"
                ? "/human1.jpeg"
                : typingStatus === "human2"
                ? "/human2.jpeg"
                : "bot.png"
              } 
              alt="" />
              
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage