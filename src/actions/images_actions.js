import { db } from '../firebase';
import { deleteImage } from '../aws/aws-exports';

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


export const createImages = (images, postID) => dispatch => {
  return (
    db.createImages(images, postID)
  );
};


export const removeImage = imageKey => dispatch => {
  return (
    deleteImage(imageKey)
      .then((res) => {
        dispatch(receiveImages(res));
      })
  );
};


export const getAllImages = () => dispatch => {
  return (
    db.getAllImages()
      .then((images) => {
        dispatch(receiveAllImages(images));
      })
  );
};

export const getPostImages = id => dispatch => {
  return (
    db.getPostImagesById(id)
      .then((images) => {
        dispatch(receiveImages(images));
      })
  );
};
