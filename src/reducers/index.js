import { combineReducers } from 'redux';
import SessionReducer from './session';
// import UsersReducer from './users';



const rootReducer = combineReducers({
  session: SessionReducer,
  // users: UsersReducer,
});



export default rootReducer;
