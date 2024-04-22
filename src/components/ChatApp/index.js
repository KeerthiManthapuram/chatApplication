import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import Header from '../Header'

import ChatItem from '../ChatItem'

import { MdSend } from "react-icons/md"

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
const colors_list = ["#FF0000", "#FFA500", "#0000FF", "#A52A2A", "#FFC0CB"]

class ChatApp extends Component{
    state = {
        messageInput: '',
        userMessagesList: [],
        showUsersList: false,
        mentionSelectedUser: '',
    }
    

    onChangingMessage = event => {
        const value = event.target.value 
        const lastChar = value.charAt(value.length - 1)
        if (lastChar === "@"){
            this.setState({
                showUsersList: true,
                mentionSelectedUser: '',
            })
        } else{
            this.setState({
                showUsersList: false,
            })
        }
        this.setState({
            messageInput: value,
        })
    }

    selectUser = (userName) => {
    const { messageInput } = this.state;
    const mentionStartIndex = messageInput.lastIndexOf('@');
    const newMessageInput =
    messageInput.substring(0, mentionStartIndex) + userName + ' ' + messageInput.substring(mentionStartIndex + 1);
    this.setState({
      messageInput: newMessageInput,
      showUsersList: false,
      mentionSelectedUser: '',
    });
    }

    onSendingMessage = event => {
        event.preventDefault()
        const {messageInput} = this.state
        const randomIndex = Math.floor(Math.random()*user_list.length)
        const randomUser = user_list[randomIndex]
        const randomColorIndex = Math.floor(Math.random()*colors_list.length)
        const randomColor = colors_list[randomColorIndex]
        console.log(randomUser)
        const currentTime = new Date().toLocaleTimeString()
        const newUserMessage = {
            id: uuidv4(),
            name: randomUser,
            message: messageInput,
            bgColor: randomColor,
            time: currentTime,
            likes: 0,
        }
        this.setState(prevState => ({
            userMessagesList: [...prevState.userMessagesList, newUserMessage],
            messageInput: '',
        }))
    }

    onClickingLikeBtn = id => {
        this.setState(prevState => ({
            userMessagesList: prevState.userMessagesList.map(each => 
                each.id === id ? {...each, likes: each.likes+1} : each
            ),
        }))
    }

    render(){
        const {messageInput, userMessagesList, showUsersList} = this.state
        console.log(userMessagesList)
        return(
            <div className="app-container">
                <Header/>
                <hr className="hr-line"/>
                <ul className="chats-container">
                 {userMessagesList.map(eachMessage => (
                    <ChatItem key={eachMessage.id} messageDetails={eachMessage}
                    onClickingLikeBtn={this.onClickingLikeBtn}
                    />
                 ))}
                </ul>
                <form className="message-input-holder" onSubmit={this.onSendingMessage}>
                <input type="text" className="message-input"
                placeholder="Type..." value={messageInput}
                onChange={this.onChangingMessage}/>
                <button className="send-button" type="submit">
                <MdSend size="30"/>
                </button>
                </form>
                {showUsersList && (
                    <div className="mention-list">
                    {user_list.map((user, index) => (
                      <span key={index} onClick={() => this.selectUser(user)}>
                        {user}
                      </span>
                    ))}
                  </div>
                )}
               
            </div>
        )
    }
}

export default ChatApp