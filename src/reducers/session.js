import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from './../actions/session_actions';

const nullUser = Object.freeze({
  authUser: null,
});

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser,
});


const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_CURRENT_USER : {
      return applySetAuthUser(state, action);
    }
    default:
      return state;
  }
};

export default SessionReducer;
