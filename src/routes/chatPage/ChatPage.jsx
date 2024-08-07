import { useRef } from 'react'
import './chatPage.css'
import { useEffect } from 'react'

const ChatPage = () => {

  const endRef = useRef(null)

  // scroll effect
  useEffect(()=> {
    endRef.current.scrollIntoView ({behavior: "smooth" });
  }, []);

  return (
    <div className='ChatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">AI</div>
          <div className="message user">User</div>
          <div className="message">AI</div>
          <div className="message user">User</div>
          <div className="message">AI</div>
          <div className="message user">User</div>
          <div className="message">AI</div>
          <div className="message user">User</div>

          {/* using ref hook */}
          <div ref = {endRef} />

        </div>
      </div>
    </div>
  )
}

export default ChatPage