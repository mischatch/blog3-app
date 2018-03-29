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
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    debugger
  }

  submitForm(e){
    e.preventDefault();
    debugger
    const post = this.state;

    this.props.createPost(post)
      .then(() => {
        this.setState({
          title: '',
          body: '',
        });
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
