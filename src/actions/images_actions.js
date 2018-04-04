import { storage } from '../firebase';

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_ALL_IMAGES = "RECEIVE_ALL_IMAGES";


export const receiveImages = images => {
  return {
    type: RECEIVE_IMAGES,
    images
  };
};

export const receiveAllImages = images => {
  return {
    type: RECEIVE_ALL_IMAGES,
    images,
  };
};




export const upload = (file, postID) => dispatch => {
  return (
    storage.updloadFiles(file, postID)
      // .then(images => {
      //   dispatch(receiveImages(images));
      // })
  );
};


export const getAllImages = () => dispatch => {
  debugger
  return (
    storage.fetchAllImages()
      .then(images => {
        dispatch(receiveAllImages(images));
      })
  );
};
