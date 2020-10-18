import { conversations } from "../../data/conversations";

export const getConversations = () => {
    return (dispatch) => {
        try{
            dispatch({ type: 'FETCH_START' })
            setTimeout(()=>{
                dispatch({ type: 'FETCH_SUCCESS', data: conversations})
            },1000)
        }catch(error){
            dispatch({ type: 'FETCH_FAILURE', error: error})
        }
    }
  }
  