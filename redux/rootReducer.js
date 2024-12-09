// reducers/index.js
import { combineReducers } from 'redux';
import exampleReducer from '../reducers/exampleReducer';
import CommonReducer from './_redux/CommonReducer';

const rootReducer = combineReducers({
    example: exampleReducer,
    homeInfo: CommonReducer
});

export default rootReducer;
