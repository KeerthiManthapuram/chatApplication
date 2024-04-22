import { AiFillLike } from "react-icons/ai"

import './index.css'

const ChatItem = props => {
    const {messageDetails, onClickingLikeBtn} = props 
    const {id, name, message, bgColor, time, likes} = messageDetails 
   
    const onClickingLike = () => {
        console.log("clicked")
        onClickingLikeBtn(id)
    }
    
    return(
     <li className="chat-item">
        <div className="profile-holder">
            <div className="profile" style={{ backgroundColor: bgColor }}>
                <h1 className="initial">{name[0]}</h1>
            </div>
        </div>
        <div className="message-section">
            <div className="name-time-section">
            <h1 className="name">{name}</h1>
            <p className="time">{time}</p>
            </div>
            <div className="message-card">
                <p className="message">{message}</p>
            </div>

        </div>
        <div className="likes-holder">
        <button type="button" className="like-button" onClick={onClickingLike}>
        <AiFillLike size="24"/>
        </button>
        <p className="count">{likes}</p>
        </div>
     </li>
    )
}

export default ChatItem