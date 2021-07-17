import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({

})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));