import { db, auth } from '../firebase';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = error => ({
  type: RECEIVE_ERRORS,
  error
});

export const login = ({ email, password }) => dispatch => {
  debugger
  return auth.doSignInWithEmailAndPassword(email, password)
    .then(
      user => dispatch(receiveCurrentUser(user))
    )
    .catch (
      err => dispatch(receiveErrors(err))
    );
};
