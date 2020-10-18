import React from 'react';
import './Message-List.css';
import Message from './Message'

const  MessageList =(props) =>{

    const loadMessages = props.messages.map((message,idx)=>{
        return (
        <Message key={idx} message={message} />)
    })
    return (
        <div id="chat-message-list">
            {loadMessages}
        </div>
    );
}

export default MessageList;