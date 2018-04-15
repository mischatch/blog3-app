import React from 'react';
import { getUrl } from '../firebase/storage';
import { newKey } from '../firebase/db';
import { upload, createAlbum } from '../aws/aws-exports';
import * as firebase from 'firebase';

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      post: {
        title: '',
        body: '',
      },
      preview: {
        files: [],
        imagePreviewUrl: [],
      },
      images: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.setState = this.setState.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    const { post } = this.state;
    post[e.target.name] = e.target.value;
    this.setState({ post });
  }

  handleFile(e){
    e.preventDefault();
    let files = Array.from(e.target.files);
    files.forEach(file => {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ preview: {
          files: this.state.preview.files.concat(file),
          imagePreviewUrl: this.state.preview.imagePreviewUrl.concat(reader.result)
          }
        });
      };
      reader.readAsDataURL(file);
    });
  }

  submitForm(e){
    e.preventDefault();
    const key = newKey();

    this.uploadImg(key); // to aws
    this.createPost(key); // to firebase posts
  }


  uploadImg(postID){
    const { files } = this.state.preview;
    files.forEach(async (file, i) => {
      const res = await upload(file, postID);
      this.setState({ images: this.state.images.concat(res) });
      if(i === files.length - 1){
        const { images } = this.state;
        const { post } = this.state;
        post.images = images;
        this.props.addDataToPost(post, postID);
        this.props.history.push('/');
      }
    })
  }

  createPost(postID){
    const { post } = this.state;
    post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    post.images = [];
    this.props.addDataToPost(post, postID);
  }

  render(){
    const preview = this.state.preview.imagePreviewUrl;
    const { title, body } = this.state.post;
    let isInvalid = title === '' || body === '';
    return(
      <div>
        <h3>Create new post</h3>
        <form>
          <input
            type="text"
            name="title"
            value={this.state.post.title}
            placeholder="Enter Title"
            onChange={this.handleChange}
            />
          <textarea
            type="text"
            name="body"
            value={this.state.post.body}
            placeholder="Enter Title"
            onChange={this.handleChange}
            />
          <input
            type='file'
            name='image'
            onChange={this.handleFile}
            multiple
            />
          <button
            type="submit"
            disabled={isInvalid}
            onClick={this.submitForm}>Post it</button>
        </form>
        { preview.map((url, i) => <img
                                      key={i}
                                      width='150px'
                                      src={url} />)}
      </div>
    )
  }
};

export default PostForm;
