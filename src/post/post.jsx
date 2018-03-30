import React from 'react';

const Post = ({ key, post, removePost }) => {
  debugger
  const { body, title, id } = post;
  return (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
      <button onClick={() => removePost(id)}>DELETE</button>
    </div>
  );
};

export default Post;
