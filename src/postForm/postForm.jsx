import React from 'react';

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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.setState = this.setState.bind(this);
    this.uploadTest = this.uploadTest.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFile(e){
    debugger
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
    let that = this;
    this.props.createPost(post)
      .then((res) => {
        debugger
        const { key } = res.post;
        this.uploadTest(key);
        this.setState({
          title: '',
          body: '',
        });
      // history.push(`/posts/${res.post.key}`);
      history.push('/');
    });
  }

  uploadTest(postID){
    const { files } = this.state.preview;
    debugger
    files.forEach(file => {
      this.props.upload(file, postID);
    });
  }

  render(){
    console.log(this.state);
    const preview = this.state.preview.imagePreviewUrl;
    const { title, body } = this.state;
    let isInvalid = title === '' || body === '';
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
