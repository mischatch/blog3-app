import React from 'react';
import { db, auth } from '../firebase';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props){
    debugger
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };

    this.submitForm = this.submitForm.bind(this);
    this.showErrors = this.showErrors.bind(this);
  }

  // submitForm(e){
  //   debugger
  //   const { email, password } = this.state;
  //   const { history } = this.props;
  //   auth.doSignInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       this.setState({ email: '', password: '', error: null });
  //       history.push('/'); //redirect home
  //     })
  //     .catch(err => {
  //       this.setState({ error: err });
  //     });
  //     e.preventDefault();
  // }

  submitForm(e){
    const { email, password } = this.state;
    const { history } = this.props;
    const user = { email: email, password: password};
    // debugger
    this.props.login(user)
    .then(() => {
      this.setState({ email: '', password: '', error: null });
      history.push('/'); //redirect home
    })
    .catch(err => {
      this.setState({ error: err });
    });
      e.preventDefault();
  }

  showErrors(){
    if(this.state.error){
      return this.state.error.message;
    }
  }



  render(){
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div>
        <h3>LOGIN</h3>
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

        <Link to='/signup'>SignUp</Link>

      </div>
    )
  }
}

export default LoginForm;
