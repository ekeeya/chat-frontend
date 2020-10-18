import React from 'react';

import './Conversation-List.css';
import ConversationItem from './ConversationItem'


const ConversationList = (props) => {
    let selectedConversationIndex =props.selectedConversationIndex;
    const LoadConversations = props.conversations.map((conversation, idx) => {
        return (
            <ConversationItem 
                key={idx}
                index = {idx} 
                isActive={idx === selectedConversationIndex}
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