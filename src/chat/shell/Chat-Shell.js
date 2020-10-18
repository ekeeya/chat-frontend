import React from 'react';
import ChatSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';
import './Chat-Shell.css';
import { connect } from 'react-redux'
import { getConversations } from "../../redux/actions/conversations"
import { getMessages } from "../../redux/actions/messages"

const  ChatShell =(props)=> {
    props.fetchConversations()
    props.fetchMessages()
    let selectedConversation = {}
    if (props.conversations.length >0){
        selectedConversation = props.conversations[0]
    }
    return (
        <div id="chat-container">
            <ChatSearch />
            <ConversationList conversations={props.conversations} />
            <NewConversation />
            <ChatTitle selectedConversation={selectedConversation}/>
            <MessageList messages={props.messages} />
            <ChatForm />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      conversations: state.conversations.conversations,
      messages: state.messages.messages
    }
  }

const  mapDispatchToProps=(dispatch)=> {
    return {
        fetchConversations: () => dispatch(getConversations()),
        fetchMessages: ()=>dispatch(getMessages())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatShell);