import { db, posts } from './firebase';

export const doCreateUser = (id, username, email) => {
  return (
    db.ref(`users/${id}`).set({
      username,
      email,
    })

  );
};


export const onceGetUsers = () =>
  db.ref('users').once('value');


export const doCreatePost = ({ title, body }) => {
  return (
    posts.push().set({
      title,
      body
    })
  );
};

export const getAllPosts = () => {
  db.ref('posts').on('value', snap => {
    console.log(snap.val());
    debugger
    return snap.val();
  })
    // .then((res) => console.log(res))
  ;
};
