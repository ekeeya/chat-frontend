import { combineReducers } from 'redux';
import conversations from './conversations'
import messages from './messages'
import selectConversation from "./selectConversation"

export default combineReducers({
    conversations,
    messages,
    selectConversation
  })