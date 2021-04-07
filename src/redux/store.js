import { createStore } from 'redux';
import postReducer from './reducers/postReducers';

const store = createStore(postReducer, { posts: [] });

export default store;
