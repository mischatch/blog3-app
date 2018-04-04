import React from 'react';

const Post = ({ id, post, removePost, goToEditPost }) => {
  const { body, title, createdAt } = post;
  const date = new Date(createdAt).toLocaleDateString();
  const time = new Date(createdAt).toLocaleTimeString();
  // debugger
  return (
    <div>
      <h5>{title}</h5>
      <h6>{date}, {time}</h6>
      <p>{body}</p>
      <button onClick={() => removePost(id)}>✕</button>
      <button onClick={() => goToEditPost(id)}>✎</button>
    </div>
  );
};

export default Post;
