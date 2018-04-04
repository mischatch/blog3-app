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
      const arr = images.images;
      debugger
      return (
        <div>
          { arr.map((name, i) =>  <img
            key={i}
            width='150px'
            src={getUrl(name, id)} /> )}
        </div>
      )

    }


  };
  // debugger
  return (
    <div>
      <h5>{title}</h5>
      <h6>{date}, {time}</h6>
      <p>{body}</p>
      <button onClick={() => removePost(id)}>✕</button>
      <button onClick={() => goToEditPost(id)}>✎</button>
      {getImages()}
    </div>
  );
};

export default Post;
