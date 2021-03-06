import { combineReducers } from 'redux';
import SessionReducer from './session';
import postsReducer from './posts';
// import UsersReducer from './users';



const rootReducer = combineReducers({
  session: SessionReducer,
  posts: postsReducer,
  // users: UsersReducer,
});



export default rootReducer;
