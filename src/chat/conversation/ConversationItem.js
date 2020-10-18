import React from 'react';

import './conversationItem.css';

const ConversationItem =(props) =>{
    let className = 'conversation';
    if(props.isActive){
        className+=" active"
    }
    const { imageUrl, title,createddAt,latestMessageText} = props.conversation
    return (
        <div className={className} onClick={()=>{props.clicked(props.conversationId)}}>
                <img src={imageUrl} alt={title} />
                <div className="title-text">{title}</div>
                <div className="created-date">{createddAt}</div>
                <div className="conversation-message">
                    {latestMessageText}
                </div>
            </div>
    );
}

export default ConversationItem;
