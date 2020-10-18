

export const sendMsg = (message) => {
    console.log(message)
    return (dispatch) => {
        try{
            dispatch({ type: 'UPDATE_CONVERSATION', newMessage: message})
        }catch(error){
        }
    }
  }
  