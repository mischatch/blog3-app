import React from 'react';

const Post = ({ id, post, removePost }) => {
  const { body, title } = post;
  return (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
      <button onClick={() => removePost(id)}>✕</button>
    </div>
  );
};

export default Post;
