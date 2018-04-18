import { postEdit } from '../firebase/db';
import { upload, deleteImage } from '../aws/aws-exports';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostEdit extends React.Component {
  constructor(props){
    super(props);

    // debugger
    this.state = {
      title: this.props.title,
      body: this.props.body,
      images: this.props.images,
      preview: {
        files: [],
        imagePreviewUrl: [],
      }
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
    this.deletePreviewImg = this.deletePreviewImg.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
  }

  componentWillMount(){
    debugger
    const { id } = this.props;
    this.props.getOnePost(id);
  }

  // componentDidMount(){
  //   const id = this.props.history.location.pathname.slice(7);
  //   this.props.getPostImages(id);
  //   this.setState({images: this.props.images})
  // }

  componentWillReceiveProps(nextProps){
    debugger
    const { title, body, images } = nextProps.post;
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
    const { title, body, images, preview } = this.state;
    debugger
    if (images && preview.files.length === 0){ // if no images were added
      const post = {title, body, images}; // in case there is no images in post
      this.props.editPost(post, id)
        .then(() => {
          this.props.history.push('/');
        });
    } else {
      this.uploadImg(id);
    }
  }

  uploadImg(postID){
    const { files } = this.state.preview;
    if(!this.state.images) this.setState({ images : [] });
    files.forEach(async (file, i) => {
      const res = await upload(file, postID);
      this.setState({ images: this.state.images.concat(res) });
      if(i === files.length - 1){
        const { title, body, images } = this.state;
        debugger
        const post = { title, body, images };
        // post.images = images;
        this.props.addDataToPost(post, postID);
        this.props.history.push('/');
      }
    })
  }

  deleteImg(e, id){ // from db and aws
    const key = this.props.match.params.postId;
    const imagesUpd = this.state.images.filter(image => image.Key !== id);
    this.setState({ images: this.state.images = imagesUpd }); // Update State
    deleteImage(id); // from aws s3
    const post = this.state;
    postEdit(post, key); // update firebase DB
  }

  renderImages(){ // for already uploaded images
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

  deletePreviewImg(e, i){
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
    // const id = this.props.history.location.pathname.slice(7);
    if(!this.state.title || !this.state.body){
      return null;
    }
    const preview = this.state.preview.imagePreviewUrl;

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
          <input
            type='file'
            name='image'
            onChange={this.handleFile}
            multiple
            />
          <button type="submit" onClick={this.submitForm}>Edit</button>
        </form>
        <div className='imgs'>
          { preview.map((url, i) =>
            <div className='imgWrapper' key={i}>
              <div
                className='x'
                onClick={(e) => this.deletePreviewImg(e, i)}
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
    )
  }
}

export default PostEdit;
