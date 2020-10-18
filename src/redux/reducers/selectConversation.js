const initialState = {
    selectedConversationIndex:null,
    selectedConversation:{}
}

export default function selectConversation(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CONVERSATION':
            return Object.assign({}, state, {
                selectedConversation:action.data,
                selectedConversationIndex:action.index
            })
            case 'SELECT_CONVERSATION_FAIL':
                return Object.assign({}, state, {
                    selectedConversation:{},
                    selectedConversationIndex:null
                })
        default:
            return state

    }
}

