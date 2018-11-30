export default ({ dispatch }) => next => action => {

    // Check is this action is async, 
    // or has Promisse as a payload
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // Attach a funcion to the promisse when it resolves,
    // dispatching a new action
    action.payload.then((response) => {
        const newAction = { ...action, payload: response};
        dispatch(newAction);
    })
}