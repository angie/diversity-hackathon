import { createStore } from 'redux';
import sentiment from './reducers/sentiment';

const store = createStore(sentiment);

export default store;
