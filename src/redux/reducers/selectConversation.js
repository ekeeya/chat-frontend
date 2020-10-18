const initialState = {
    selectedConversationId: null,
    selectedConversation: {},
    messages: []
}

export default function selectConversation(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CONVERSATION':
            return Object.assign({}, state, {
                selectedConversation: action.data,
                selectedConversationId: action.conversationId,
                messages: action.data.messages
            })
        case 'UPDATE_CONVERSATION':
            
            return Object.assign({}, state, {
                messages: [action.newMessage,...state.messages]
            })
        case 'SELECT_CONVERSATION_FAIL':
            return Object.assign({}, state, {
                selectedConversation: {},
                selectedConversationId: null,
                messages: []
            })
        default:
            return state

    }
}

