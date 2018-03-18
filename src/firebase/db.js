import { db } from './firebase';

export const doCreateUser = (id, username, email) => {
  return (
    db.ref(`users/${id}`).set({
      username,
      email,
    })

  )
}


export const onceGetUsers = () =>
  db.ref('users').once('value');
