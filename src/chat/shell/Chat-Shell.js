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
import { selectConversation } from "../../redux/actions/selectConversation"
import { sendMsg } from '../../redux/actions/sendReceiveMsg'
const  ChatShell =(props)=> {
    props.fetchConversations()
    
    const isSelected = (conversationId)=>{
        props.toggleConversations(conversationId,props.conversations)
    }
    const sendMessage=(message)=>{
        props.sendMessage(message)
        console.log(message)
    }
    return (
        <div id="chat-container">
            <ChatSearch />
            <ConversationList 
                conversations={props.conversations}
                clicked ={isSelected} 
                selectedConversationId={props.selectedConversationId}
            />
            <NewConversation />
            <ChatTitle selectedConversation={props.selectedConversation}/>
            <MessageList messages={props.messages} />
            <ChatForm  sendMsg={sendMessage}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      conversations: state.conversations.conversations,
      messages: state.selectConversation.messages,
      selectedConversation:state.selectConversation.selectedConversation,
      selectedConversationId:state.selectConversation.selectedConversationId

    }
  }

const  mapDispatchToProps=(dispatch)=> {
    return {
        fetchConversations: () => dispatch(getConversations()),
        toggleConversations:(id,conversations)=>dispatch(selectConversation(id,conversations)),
        sendMessage:(message)=>dispatch(sendMsg(message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatShell);