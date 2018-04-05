import React from 'react';
import { getUrl } from '../firebase/storage';

const Post = ({ id, post, removePost, goToEditPost, images }) => {
  const { body, title, createdAt } = post;
  const date = new Date(createdAt).toLocaleDateString();
  const time = new Date(createdAt).toLocaleTimeString();



  const getImages = () => {
    const { images } = post;
    if(!images){
      return null;
    } else {
      return (
        <div>
          { images.map((name, i) =>  <img
            key={i}
            width='150px'
            src={name} /> )}
        </div>
      )
    }
  };

  
  return (
    <div>
      <h5>{title}</h5>
      <h6>{date}, {time}</h6>
      <p>{body}</p>
      {getImages()}
      <button onClick={() => removePost(id)}>✕</button>
      <button onClick={() => goToEditPost(id)}>✎</button>
    </div>
  );
};

export default Post;
