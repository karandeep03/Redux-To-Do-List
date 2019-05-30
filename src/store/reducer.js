
const initialState = {
    list: [],
    str: ''
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'INPUT_CHANGE'){
        newState.str = action.value;
    }
    if(action.type === 'ADD_ITEM') {
        newState.list= [...newState.list, newState.str]
    }
    if(action.type === 'DELETE_ITEM') {
        newState.list = newState.list.filter((item, index) => index!= action.value )
    }

    return newState;
}

export default reducer;