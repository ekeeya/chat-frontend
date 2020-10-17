import React from 'react';

import './Conversation-List.css';
import ConversationItem from './ConversationItem'


const ConversationList = (props) => {
    let selectedConversationIndex =0;
    const LoadConversations = props.conversations.map((conversation, idx) => {
        return (
            <ConversationItem 
            key={idx} 
            isActive={idx === selectedConversationIndex}
            conversation={conversation} />
        )
    })

    return (
        <div id="conversation-list">
            {LoadConversations}
        </div>
    );
}

export default ConversationList;