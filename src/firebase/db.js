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
  return posts.push({ title, body })
    .then((res) => {
      return  { post: {title, body}, key: res.key };
      });
  // return getLastPost();
};

export const getPostById = (id) => {
    return posts.child(`${id}`).once('value')
      .then(snap => {
        const post = snap.val();
        return { post, key: id};
      });
};

export const getAllPosts = () => {
  return db.ref('posts').once('value')
    .then(res => {
      return res.val();
    });
  };

export const removePost = (id) => {
  return posts.child(id).remove()
    .then(id => id);
};

export const postEdit = (post, id) => {
  return posts.child(id).update(post)
    .then(() => {
      return getPostById(id);
    });
};
