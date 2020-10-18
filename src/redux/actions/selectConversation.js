

export const selectConversation = (index, conversations) => {
    return (dispatch) => {
        try{
            if (conversations.length >0){
                dispatch({ type: 'SELECT_CONVERSATION',index:index, data: conversations[index]})
            }else{
                dispatch({ type: 'SELECT_CONVERSATION', data:{} })
            }
        }catch(error){
        }
    }
  }
  