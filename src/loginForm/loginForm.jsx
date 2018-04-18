import React from 'react';


class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };

    this.submitForm = this.submitForm.bind(this);
    this.showErrors = this.showErrors.bind(this);
  }

  submitForm(e){
    const { email, password } = this.state;
    const { history } = this.props;
    const user = { email: email, password: password};
    this.props.login(user)
    .then(() => {
      // this.setState({ email: '', password: '', error: null });
      history.push('/profile'); //redirect home
    })
    .catch(err => {
      this.setState({ error: err });
    });
      e.preventDefault();
  }

  showErrors(){
    if(this.state.error){
      return (
        <ul>
          {this.state.error.message}
        </ul>

      )
    }
  }



  render(){
    const { email, password } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.submitForm}>
          <input
            placeholder="email"
            type="text"
            name="email"
            onChange={e => this.setState({'email': e.target.value})}
            value={this.state.email} />
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={e => this.setState({'password': e.target.value})}
            value={this.state.password} />
          <button disabled={isInvalid} type="submit">Login</button>
        </form>
        <div>
          {this.showErrors()}
        </div>
      </div>
    )
  }
}

export default LoginForm;
