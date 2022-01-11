export function numberReducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return {
                ...state,
                number: state.number + 2
            }
        case 'multiply7':
            return {
                ...state,
                number: state.number * 7
            }
        case 'division25':
            return {
                ...state,
                number: state.number / 25
            }
        case 'parseInt':
            return {
                ...state,
                number: parseInt(state.number)
            }
        case 'numberAddN':
            return {
                ...state,
                number: state.number + parseInt(action.payload)
            }
        default:
            return state
    }
}