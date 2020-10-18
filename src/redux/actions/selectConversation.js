

export const selectConversation = (conversationId, conversations) => {
    return (dispatch) => {
        try{
            if (conversations.length >0){
                const selectedConversation = conversations.find(
                    conversation=>conversation.id===conversationId
                )
                dispatch({ type: 'SELECT_CONVERSATION',conversationId:conversationId, data: selectedConversation})
            }else{
                dispatch({ type: 'SELECT_CONVERSATION', data:{} })
            }
        }catch(error){
        }
    }
  }
  