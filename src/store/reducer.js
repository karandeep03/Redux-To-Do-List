
const initialState = {
    list: []
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'ADD_ITEM') {
        newState.list= [...newState.list, action.val.current.value]
    }
    if(action.type === 'DELETE_ITEM') {
        newState.list = newState.list.filter((item, index) => index!= action.value )
    }

    return newState;
}

export default reducer;