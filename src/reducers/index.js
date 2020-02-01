// this is our root reducer
import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';
// below takes in object with all of our reducers
export default combineReducers({
  // 'log': is what im calling the state just for the log part of our application
  log: logReducer,
  tech: techReducer
});
