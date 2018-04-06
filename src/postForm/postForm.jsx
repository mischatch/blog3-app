import React from 'react';
import { getUrl } from '../firebase/storage';
import { newKey } from '../firebase/db';

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
    const { post } = this.state;
    const history = this.props.history;
    const key = newKey();

    this.uploadImg(key);
  }

  uploadImg(postID){
    const { files } = this.state.preview;
    files.forEach(file => {
      const url = this.props.upload(file, postID)
        .then(res => {
          this.setState({ images: this.state.images.concat(res) });
          this.createPost(postID);
        });
    });
  }

  createPost(postID){
    const post = {
                  title: this.state.post.title,
                  body: this.state.post.body,
                  images: this.state.images,
                };
    return this.props.addDataToPost(post, postID)
      .then(() => {
        this.props.history.push('/');
      });
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
}

export default PostForm;
