import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import booksReducer from './booksReducer';
import liderboardReducer from './liderboardReducer';

const reducers = combineReducers({
  books: booksReducer,
  liderboard: liderboardReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));