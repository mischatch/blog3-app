import React from 'react';

class PasswordChange extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    const { passwordOne } = this.state;
    // const user = { email: this.props.currentUser.email, password: passwordOne};

    this.props.changePass(passwordOne)
      .then(() => {
        this.setState(() => ({
          passwordOne: '',
          passwordTwo: '',
          error: null,
        }));
      })
      .catch(error => this.setState(error));
      e.preventDefault();
  }


  render(){
    const { passwordOne, passwordTwo, error } = this.props;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          onChange={e => this.setState({'passwordOne': e.target.value})}
          type="password"
          placeholder="New Password"
          />
        <input
          value={passwordTwo}
          onChange={e => this.setState({'passwordTwo': e.target.value})}
          type="password"
          placeholder="Confirm New Password"
          />
        <button disabled={isInvalid} type="submit">  Change Password  </button>

        { error && <p>{error.message}</p> }

      </form>
    );
  }
};

export default PasswordChange;
