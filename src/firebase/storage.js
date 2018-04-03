import * as firebase from 'firebase';
import { storage } from './firebase';

const storageRef = storage.ref();
const images = storageRef.child('images');
