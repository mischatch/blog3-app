import React from 'react';

class PostView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount(){
    const id = this.props.history.location.pathname.slice(7);
    this.props.getOnePost(id);
    const post = this.props.post.id;
    console.log(post);
    // this.setState({
    //   title: post.title,
    //   body: post.body,
    // });
  }

  componentDidMount(){
    const id = this.props.history.location.pathname.slice(7);
    this.props.getOnePost(id);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e){
    e.preventDefault();
    const post = this.state;
    this.props.editPost(post);
  }


  render(){
    debugger
    const id = this.props.history.location.pathname.slice(7);
    const { post } = this.props.post.id;
    if(this.props.post){
      console.log(post);
      // this.setState({post})
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
