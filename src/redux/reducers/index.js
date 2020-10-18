import { combineReducers } from 'redux';
import conversations from './conversations'
import messages from './messages'
export default combineReducers({
    conversations,
    messages
  })