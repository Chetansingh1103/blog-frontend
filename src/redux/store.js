// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from "redux-thunk";
import authReducer from './reducers/authreducer';
import blogReducer from './reducers/blogreducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
