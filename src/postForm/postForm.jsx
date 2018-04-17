import React from 'react';
import { newKey } from '../firebase/db';
import { upload } from '../aws/aws-exports';
import * as firebase from 'firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    this.deleteImg = this.deleteImg.bind(this);
  }

  handleChange(e, delta, source, editor){
    // e.preventDefault();
    debugger
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
    if(this.state.preview.imagePreviewUrl.length !== 0){
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
    } else {
      this.props.history.push('/');
    };
  }

  createPost(postID){
    const { post } = this.state;
    post.createdAt = firebase.database.ServerValue.TIMESTAMP;
    post.images = [];
    this.props.addDataToPost(post, postID);
  }

  deleteImg(e, i){
    debugger
    const { preview } = this.state;
    const newPreview = {files: [], imagePreviewUrl: []};
    Object.keys(preview).forEach((ele) => {
      newPreview[ele] = preview[ele].filter((el, idx) => idx !== i);
    });
    debugger
    this.setState({preview: this.state.preview = newPreview});
  }

  render(){
    const preview = this.state.preview.imagePreviewUrl;
    const { title, body } = this.state.post;
    let isInvalid = title === '' || body === '';
    return(
      <div>
        <h3>Create new post</h3>
        <form>
          <ReactQuill
            type="text"
            name="title"
            value={this.state.post.title}
            placeholder="Enter Title"
            onChange={html => this.handleChange({target: {value: html, name: 'title'}})}
            />
          <ReactQuill
            type="text"
            name="body"
            value={this.state.post.body}
            placeholder="Enter Title"
            onChange={html => this.handleChange({target: {value: html, name: 'body'}})}
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
        <div className='imgs'>
          { preview.map((url, i) =>
            <div className='imgWrapper' key={i}>
              <div
                className='x'
                onClick={(e) => this.deleteImg(e, i)}
                >✕</div>
              <img
                key={i}
                alt={i}
                width='150px'
                src={url} />
            </div>
          )}
          </div>

      </div>
    );
  }
};

export default PostForm;
