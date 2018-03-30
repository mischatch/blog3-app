import React from 'react';

const Post = ({ post }) => {
  debugger
  const { body, title } = post[(Object.keys(post))];
  return (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
  );
};

export default Post;
