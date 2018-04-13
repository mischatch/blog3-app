import ReactS3 from 'react-s3';
import AWS from 'aws-sdk';
var S3 = require('aws-sdk/clients/s3');

AWS.config.region = 'us-east-1';

AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:a5a8199d-a88b-4681-94eb-001fbb135187"
  })
});


var s3 = new AWS.S3({
 apiVersion: '2006-03-01',
 params: {Bucket: 'blog3-app-dev'}
});

export const upload = (file, key) => {
  let albumKey = encodeURIComponent(key) + '//';
  let photoKey = albumKey + file.name;
  debugger
  s3.upload({
    Key: photoKey,
    Body: file,
    ACL: 'public-read'
  }, function(err, data) {
    debugger
    if (err) {
      return alert('There was an error uploading your photo: ', err.message);
    }
    return data;
  });
};

export const deleteAlbum = (key) => {

};

export const createAlbum = (albumName) => {
  albumName = albumName.trim();
  debugger
  if (!albumName) {
    return alert('Album names must contain at least one non-space character.');
  }
  if (albumName.indexOf('/') !== -1) {
    return alert('Album names cannot contain slashes.');
  }
  var albumKey = encodeURIComponent(albumName) + '/';
  s3.headObject({Key: albumKey}, function(err, data) {
    debugger
    if (!err) {
      return alert('Album already exists.');
    }
    if (err.code !== 'NotFound') {
      return alert('There was an error creating your album: ' + err.message);
    }
    s3.putObject({Key: albumKey}, function(err, data) {
      debugger
      if (err) {
        return alert('There was an error creating your album: ' + err.message);
      }
      alert('Successfully created album.');
      // viewAlbum(albumName);
    });
  });
};
