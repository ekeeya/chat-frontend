const initialState = {
    loading: false,
    error: null,
    conversations:[]
}

export default function conversations(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_START':
            return Object.assign({}, state, {
                error: null,
                loading: true,
            })

        case 'FETCH_SUCCESS':
            return Object.assign({}, state, {
                loading: false,
                conversations:action.data,
                error:null
            });
        case 'FETCH_FAILURE':
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            })
        case 'CLOSE_FETCH_DIALOG':
            return Object.assign({}, state, {
                error: null,
            })
        default:
            return state

    }
}

