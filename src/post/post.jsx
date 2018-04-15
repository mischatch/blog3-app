import React from 'react';
import { getUrl } from '../firebase/storage';

const Post = ({ id, post, removePost, goToEditPost }) => {
  const { body, title, createdAt, images } = post;
  const date = new Date(createdAt).toLocaleDateString();
  const time = new Date(createdAt).toLocaleTimeString();



  const getImages = () => {
    if(!images){
      return null;
    } else {
      // debugger
      return (
        <div>
          { images.map((img) =>  <img
            key={img.key}
            width='150px'
            src={img.Location} /> )}
        </div>
      )
    }
  };


  return (
    <div  className='post'>
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
