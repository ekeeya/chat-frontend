const initialState = {
    isMsgLoading: false,
    msgError: null,
    messages:[]
}

export default function messages(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_MSG_START':
            return Object.assign({}, state, {
                msgError: null,
                isMsgLoading: true,
            })

        case 'FETCH_MSG_SUCCESS':
            return Object.assign({}, state, {
                isMsgLoading: false,
                messages:action.data,
                msgError:null
            });
        case 'FETCH_MSG_FAILURE':
            return Object.assign({}, state, {
                isMsgLoading: false,
                msgError: action.error
            })
        case 'CLOSE_MSG_DIALOG':
            return Object.assign({}, state, {
                msgError: null,
            })
        default:
            return state

    }
}