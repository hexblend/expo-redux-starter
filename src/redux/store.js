import { createStore, combineReducers, applyMiddleware } from 'redux';

//
// Reducers
//
import helloReducer from "./reducers/helloReducer";


//
// Actions
//


//
// Store
//
const store = createStore(
  combineReducers({
    hello: helloReducer
  }),
  applyMiddleware(thunk)
);
export {store};
