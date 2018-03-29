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
  db.ref('posts').once('value')
    .then((res) => console.log(res))
  ;
};
