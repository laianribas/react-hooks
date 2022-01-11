export function numberAdd2(dispatch) {
    dispatch({ type: 'numberAdd2' })
}
export function multiply7(dispatch) {
    dispatch({ type: 'multiply7' })
}
export function division25(dispatch) {
    dispatch({ type: 'division25' })
}
export function parseInt(dispatch) {
    dispatch({ type: 'parseInt' })
}
export function numberAddN(dispatch, val) {
    dispatch({ type: 'numberAddN', payload: val })
}