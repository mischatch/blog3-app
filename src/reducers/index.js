import { combineReducers } from 'redux';
import SessionReducer from './session';
import postsReducer from './posts';
import imagesReducer from './images';
// import UsersReducer from './users';



const rootReducer = combineReducers({
  session: SessionReducer,
  posts: postsReducer,
  images: imagesReducer,
  // users: UsersReducer,
});



export default rootReducer;
