import * as firebase from 'firebase';
import { storage } from './firebase';

const storageRef = storage.ref();
const images = storageRef.child('images');

export const updloadFiles = (file, postID) => {
  return storageRef.child(`${postID}/${file.name}`).put(file)
        .then(snap => {
          return snap.metadata.downloadURLs[0];
        });
      // storageRef.child(`images/${postID}`).pust(file);
};
