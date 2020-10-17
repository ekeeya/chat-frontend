import React from 'react';
import ChatSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';
import './Chat-Shell.css';

import {conversations } from '../../data/conversations'
import { messages } from '../../data/messages'

function ChatShell() {
    return (
        <div id="chat-container">
            <ChatSearch />
            <ConversationList conversations={conversations} />
            <NewConversation />
            <ChatTitle />
            <MessageList messages={messages} />
            <ChatForm />
        </div>
    );
}

export default ChatShell;