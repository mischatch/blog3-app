import { db, auth } from '../firebase';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";



export const receiveCurrentUser = currentUser => {
  return {
  type: RECEIVE_CURRENT_USER,
  currentUser
  };
};

export const receiveErrors = error => ({
  type: RECEIVE_ERRORS,
  error
});

export const login = ({ email, password }) => dispatch => {
  debugger
  return (
    auth.doSignInWithEmailAndPassword(email, password)
    .then(
      user => dispatch(receiveCurrentUser(user))
    )
  );
};

export const logout = () => dispatch => {
  return (
    auth.doSignOut()
      .then(
        user => dispatch(receiveCurrentUser(null))
      )
  );
};

export const signup = ({ email, password, username }) => dispatch => {
  return(
    auth.doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        db.doCreateUser(authUser.uid, username, email);
      })
  );
};

export const changePass = (newPass) => dispatch => {
  return (
    auth.doPasswordUpdate(newPass)
  );
};

export const resetPass = (email) => dispatch => {
  debugger
  return (
    auth.doPasswordReset(email)
  );
};
