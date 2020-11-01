export const initialState = { user : null };

export const actionTypes = {
    SET_USER : "SETUSER",
};

const reducer = (state , action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user : action.user,
            };
    
        default:
            return state;
    }
};

export default reducer;