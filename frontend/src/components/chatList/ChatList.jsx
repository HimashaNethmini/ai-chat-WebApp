import './chatList.css'
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to = "/dashboard">Create a new Chat</Link>
        <Link to = "/">Explore Chat A </Link>
        <Link to = "/" >Content</Link>
        <hr />
        <div className="list">
            <Link to="/"> My Chat List </Link>
            <Link to="/"> My Chat List </Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className="texts">
                <span>Upgrade to Chat AI Pro</span>
                <span>Get Access to Unlimited Features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList