import { deleteImg } from '../firebase/storage';
import React from 'react';

class PostEdit extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.post.title,
      body: this.props.post.body,
      images: this.props.post.images,
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

  componentWillReceiveProps(nextProps){
    const id = this.props.history.location.pathname.slice(7);
    const { title, body, images } = nextProps.post[id];
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
              { images.map((name, i) =>
                <div className='imgWrapper' key={i}>
                  <div
                    className='x'
                    name={name}
                    onClick={this.deleteImg}
                    >✕</div>
                  <img
                    title="title"
                    key={i}
                    width='150px'
                    src={name} />
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
