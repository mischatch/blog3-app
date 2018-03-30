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
    return posts.push().set({ title, body })
      .then(() => {
        return getLastPost();
      });
};

export const getLastPost = () => {
    debugger
    return posts.limitToLast(2).on('child_added', (snap) => {
      debugger
      console.log(snap);
      return snap.val();
    });
};

export const getAllPosts = () => {
  return db.ref('posts').once('value')
    .then(res => {
      return res.val();
    });
  };
    // .then((res) => console.log(res))
