import { combineReducers } from 'redux';
import SessionReducer from './session';
import UsersReducer from './users';



const rootReducer = combineReducers({
  sessionState: SessionReducer,
  // users: UsersReducer,
});



export default rootReducer;
