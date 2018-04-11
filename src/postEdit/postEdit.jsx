import { deleteImg } from '../firebase/storage';
import React from 'react';

class PostEdit extends React.Component {
  constructor(props){
    super(props);

    // debugger
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body,
      images: this.props.images,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.deleteImg = this.deleteImg.bind(this);
  }

  componentWillMount(){
    const id = this.props.history.location.pathname.slice(7);
    const props = this.props;
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

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e){
    e.preventDefault();
    const id = this.props.history.location.pathname.slice(7);
    const post = this.state;
    debugger
    this.props.editPost(post, id)
      .then(() => {
        this.props.history.push('/');
      });
  }

  deleteImg(e){
    debugger
    const key = Object.keys(this.props.post);
    const src = e.target.parentElement.children[1].src;
    const name = decodeURIComponent(src).slice(76 + key[0].length).slice(0, 41);
    deleteImg(name, key)
      .then((res) => {
        debugger
        this.state.images
      });
  }


  render(){
    const id = this.props.history.location.pathname.slice(7);
    if(!this.state.title || !this.state.body){
      return null;
    }
    const { images } = this.state;
    let disp = 'none';
    debugger
    return (
      <div>
        <h3>Edit Post</h3>
        <form>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter Title"
            onChange={this.handleChange}
            />
          <textarea
            type="text"
            name="body"
            value={this.state.body}
            placeholder="Enter Title"
            onChange={this.handleChange}
            />
          <div className='imgs'>
              { images.map((image) =>
                <div className='imgWrapper' key={image.key}>
                  <div
                    className='x'
                    name={image.key}
                    onClick={this.deleteImg}
                    >✕</div>
                  <img
                    title="title"
                    key={image.key}
                    width='150px'
                    src={image.location} />
                </div>
            )}
            </div>
          <button type="submit" onClick={this.submitForm}>Edit</button>
        </form>
      </div>
    )
  }
}

export default PostEdit;
