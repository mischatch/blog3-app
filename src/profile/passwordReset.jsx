import React from 'react';

class PasswordReset extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();

    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e){
    const { email } = this.state;

    this.props.resetPass(email)
      .then(() => {
        this.setState({ email: ''})
      });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            />
        </form>
      </div>

    )
  }
}

export default PasswordReset;
