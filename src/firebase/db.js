import { db } from './firebase';

export const doCreateUser = (id, username, email) => {
  // debugger
  return (
    db.ref(`users/${id}`).set({
      username,
      email,
    })

  )
}
