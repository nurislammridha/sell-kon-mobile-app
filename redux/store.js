import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducers';

// Create a Redux store and apply the Thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
