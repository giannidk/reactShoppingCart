import { combineReducers } from 'redux';
//import AuthReducer from './reducer_auth';

const RootReducer = combineReducers ({
    //auth: AuthReducer
    appData: () => []
})

export default RootReducer;