import React from 'react';

class PostView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.post.title,
      body: this.props.post.body,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount(){
    const id = this.props.history.location.pathname.slice(7);
    const props = this.props;
    this.props.getOnePost(id);
  }

  componentWillReceiveProps(nextProps){
    const id = this.props.history.location.pathname.slice(7);
    const { title, body } = nextProps.post[id];
    this.setState({
      title,
      body,
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
    this.props.editPost(post, id);
  }


  render(){
    const id = this.props.history.location.pathname.slice(7);
    if(!this.state.title || !this.state.body){
      return null;
    }
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
          <button type="submit" onClick={this.submitForm}>Edit</button>
        </form>
      </div>
    )
  }
}

export default PostView;
