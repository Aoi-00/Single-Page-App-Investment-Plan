const initState = {
    result:[],
};

const ItemReducers = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM':
            return {
                ...state,
                result: action.payload 
            }

        default:
            return state;
    }
}
export default ItemReducers;
