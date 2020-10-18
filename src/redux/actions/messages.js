import { messages } from "../../data/messages";

export const getMessages = () => {
    return (dispatch) => {
        try{
            dispatch({ type: 'FETCH_MSG_START' })
            setTimeout(()=>{
                dispatch({ type: 'FETCH_MSG_SUCCESS', data: messages})
            },1000)
        }catch(error){
            dispatch({ type: 'FETCH_MSG_FAILURE', error: error})
        }
    }
  }
  