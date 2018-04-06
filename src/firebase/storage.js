import * as firebase from 'firebase';
import { storage, db } from './firebase';

const storageRef = storage.ref();
const images = storageRef.child('images');

export const updloadFiles = (file, postID) => {
  return storageRef.child(`images/${postID}/${file.name}`).put(file)
        .then(snap => {
          const imageData = {
            name: snap.metadata.name,
            url: snap.metadata.downloadURLs[0],
          };

          return snap.metadata.downloadURLs[0];
        });
};

export const getUrl = (name, id) => {
  debugger
  return storageRef.child(`images/${id}/${name}`).getDownloadURL()
          .then(res => res);
};

export const deleteImg = (name, id) => {
  return storageRef.child(`images/${id}/${name}`).delete();
};

export const deletePostPhotos = (id) => {
  return storageRef.child(`images/${id}/`).delete();
};
