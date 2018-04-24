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
      return (
        <div className='home-images'>
          { images.map((img, i) =>
            <div key={img.key} className='home-image-wrapper'>
              <img
              key={img.key}
              alt={img.key}
              width='150px'
              src={img.Location}
              onClick={(e) => openModal(e, id, images, i)}/>
            </div>
        )}
        </div>
      )
    }
  };


  return (
    <div  className='post'>
      <h5>{date}, {time}</h5>
      <p dangerouslySetInnerHTML={{__html:title}} />
      <p dangerouslySetInnerHTML={{__html:body}} />
      {postImages()}
      <div id='home-post-btns' className={display}>
        <button onClick={() => removePost(id)}>✕</button>
        <button onClick={() => goToEditPost(id)}>✎</button>
      </div>
    
    </div>
  );
};

export default Post;
