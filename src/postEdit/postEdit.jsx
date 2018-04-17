import { postEdit } from '../firebase/db';
import { deleteImage } from '../aws/aws-exports';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostEdit extends React.Component {
  constructor(props){
    super(props);

    // debugger
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body,
      images: this.props.images,
    };

    this.modules = {
      toolbar: [
        [{size: []}],
        ['bold', 'italic', 'underline'],
      ]
    };
    this.modules2 = {
      toolbar: [
        ['link', 'image', 'video']
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.deleteImg = this.deleteImg.bind(this);
    this.renderImages = this.renderImages.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentWillMount(){
    const id = this.props.history.location.pathname.slice(7);
    this.props.getOnePost(id);
  }

  // componentDidMount(){
  //   const id = this.props.history.location.pathname.slice(7);
  //   this.props.getPostImages(id);
  //   this.setState({images: this.props.images})
  // }

  componentWillReceiveProps(nextProps){
    const id = this.props.history.location.pathname.slice(7);
    const { title, body, images } = nextProps.post[id];
    // const { images } = nextProps.images[id];
    debugger
    this.setState({
      title,
      body,
      images,
    });
  }

  handleChange(e, delta, source, editor){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e){
    e.preventDefault();
    const id = this.props.history.location.pathname.slice(7);
    const { title, body, images } = this.state;
    const post = this.state.images? this.state : { title, body }; // in case there is no images in post

    this.props.editPost(post, id)
      .then(() => {
        this.props.history.push('/');
      });
  }

  deleteImg(e, id){
    const key = this.props.match.params.postId;
    const imagesUpd = this.state.images.filter(image => image.Key !== id);
    this.setState({ images: this.state.images = imagesUpd }); // Update State
    deleteImage(id); // from aws s3
    const post = this.state;
    postEdit(post, key); // update firebase DB
  }

  renderImages(){
    if(this.state.images){
      const { images } = this.state;
      return(
        <div className='imgs'>
            { images.map((image) =>
              <div className='imgWrapper' key={image.key}>
                <div
                  className='x'
                  key={image.Key.split('/')[1]}
                  name={`${image.Key}`}
                  onClick={(e) => this.deleteImg(e, image.key)}
                  >✕</div>
                <img
                  title="title"
                  alt={image.key}
                  key={image.key}
                  width='150px'
                  src={image.Location} />
              </div>
          )}
          </div>
      );
    } else {
      return (
        <div> No images added!</div>
      );
    }
  }

  handleFile(e, delta, source, editor){
    debugger
  }


  render(){
    // const id = this.props.history.location.pathname.slice(7);
    if(!this.state.title || !this.state.body){
      return null;
    }
    debugger
    return (
      <div>
        <h3>Edit Post</h3>
        <form>
          <ReactQuill
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter Title"
            onChange={html => this.handleChange({target: {value: html, name: 'title'}})}
            />
          <ReactQuill
            type="text"
            name="body"
            value={this.state.body}
            placeholder="Enter Post Text"
            onChange={html => this.handleChange({target: {value: html, name: 'body'}})}
            />
          {this.renderImages()}
          <ReactQuill
            modules={this.modules2}
            onChange={html => this.handleFile({target: {value: html, name: 'images'}})}
            />
          <button type="submit" onClick={this.submitForm}>Edit</button>
        </form>
      </div>
    )
  }
}

export default PostEdit;
