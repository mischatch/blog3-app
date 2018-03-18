import { auth } from '../firebase';

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
  return (
    auth.doSignInWithEmailAndPassword(email, password)
    .then(
      user => dispatch(receiveCurrentUser(user))
    )
  );
    // .catch (
    //   err => dispatch(receiveErrors(err))
    // );
};

export const logout = () => dispatch => {
  return (
    auth.doSignOut()
      .then(
        user => dispatch(receiveCurrentUser(null))
      )
  );
};
