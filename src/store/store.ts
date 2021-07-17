import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import booksReducer from './booksReducer';

const reducers = combineReducers({
  books: booksReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));