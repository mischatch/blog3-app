import React from 'react';

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.setState = this.setState.bind(this);
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
    const history = this.props.history;
    debugger
    this.props.createPost(post)
      .then((res) => {
        debugger
        this.setState({
          title: '',
          body: '',
        });
      // history.push(`/posts/${res.post.key}`);
      history.push('/');
    });
  }

  render(){

    return(
      <div>
        <h3>Create new post</h3>
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
          <button type="submit" onClick={this.submitForm}>Post it</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
