import merge from 'lodash/merge';

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
    case 'AUTH_USER_SET' : {
      return applySetAuthUser(state, action);
    }
    default:
      return state;
  }
};

export default SessionReducer;
