import * as firebase from 'firebase';


  // Initialize Firebase
const config = {
    apiKey: "AIzaSyBMAX54RPG1jE-fuuBo1gvAuMHI0rOce1g",
    authDomain: "blog3-app.firebaseapp.com",
    databaseURL: "https://blog3-app.firebaseio.com",
    projectId: "blog3-app",
    storageBucket: "blog3-app.appspot.com",
    messagingSenderId: "913036463627"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


const db = firebase.database();
const auth = firebase.auth();
const posts = db.ref().child('posts');
const storage = firebase.storage();

// console.log(auth.currentUser);

export {
 db,
 auth,
 posts,
 storage,
};
