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
import { selectConversation } from "../../redux/actions/selectConversation"

const  ChatShell =(props)=> {
    props.fetchConversations()
    props.fetchMessages()
    
    const isSelected = (idx)=>{
        props.toggleConversations(idx,props.conversations)
    }
    return (
        <div id="chat-container">
            <ChatSearch />
            <ConversationList 
                conversations={props.conversations}
                clicked ={isSelected} 
                selectedConversationIndex={props.selectedConversationIndex}
            />
            <NewConversation />
            <ChatTitle selectedConversation={props.selectedConversation}/>
            <MessageList messages={props.messages} />
            <ChatForm />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      conversations: state.conversations.conversations,
      messages: state.messages.messages,
      selectedConversation:state.selectConversation.selectedConversation,
      selectedConversationIndex:state.selectConversation.selectedConversationIndex

    }
  }

const  mapDispatchToProps=(dispatch)=> {
    return {
        fetchConversations: () => dispatch(getConversations()),
        fetchMessages: ()=>dispatch(getMessages()),
        toggleConversations:(index,conversations)=>dispatch(selectConversation(index,conversations))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatShell);