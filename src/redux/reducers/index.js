import { combineReducers } from 'redux';
import conversations from './conversations'
import selectConversation from "./selectConversation"

export default combineReducers({
    conversations,
    selectConversation
  })