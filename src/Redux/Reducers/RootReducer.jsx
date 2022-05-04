import { combineReducers } from 'redux';
import TwitterReducers from './TwitterReducers';
import ItemReducers from './ItemReducers';


const RootReducer = combineReducers({
    twitter: TwitterReducers,
    item:ItemReducers,
});

export default RootReducer;
