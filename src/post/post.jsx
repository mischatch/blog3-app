import React from 'react';

const Post = ({ id, post, removePost, goToEditPost, loggedIn, openModal }) => {
  const { body, title, createdAt, images } = post;
  const date = new Date(createdAt).toLocaleDateString();
  const time = new Date(createdAt).toLocaleTimeString();
  const display = loggedIn? '' : 'hidden';


  const postImages = () => {
    if(!images){
      return null;
    } else {
      // debugger
      return (
        <div>
          { images.map((img) =>  <img
            key={img.key}
            alt={img.key}
            width='150px'
            src={img.Location}
            onClick={(e) => openModal(e)}/> )}
        </div>
      )
    }
  };


  return (
    <div  className='post'>
      <h5 dangerouslySetInnerHTML={{__html:title}} />
      <h6>{date}, {time}</h6>
      <p dangerouslySetInnerHTML={{__html:body}} />
      {postImages()}
      <div className={display}>
        <button onClick={() => removePost(id)}>✕</button>
        <button onClick={() => goToEditPost(id)}>✎</button>
      </div>
    </div>
  );
};

export default Post;
