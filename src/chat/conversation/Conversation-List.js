import React from 'react';

import './Conversation-List.css';
import ConversationItem from './ConversationItem'


const ConversationList = (props) => {
    let selectedConversationId =props.selectedConversationId;
    const LoadConversations = props.conversations.map((conversation, idx) => {
        return (
            <ConversationItem 
                key={idx}
                conversationId = {conversation.id} 
                isActive={conversation.id === selectedConversationId}
                conversation={conversation}
                clicked = {props.clicked}
            />
        )
    })

    return (
        <div id="conversation-list">
            {LoadConversations}
        </div>
    );
}

export default ConversationList;