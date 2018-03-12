import React from 'react';
import { auth, db } from '../firebase';


class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      error: null,
    };

    this.submitForm = this.submitForm.bind(this);
    this.showErrors = this.showErrors.bind(this);


  }

  submitForm(e){
    debugger
    const { email, password, username } = this.state;
    const { history } = this.props;
    auth.doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        debugger
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState({ email: '', username: '', password: '', error: null, });
            history.push('/'); //redirect home
          })
          .catch(err => {
            this.setState({ error: err });
          });
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
    // const isInvalid = password === '' || email === '';

    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.submitForm}>
          <input
            placeholder="email"
            type="text"
            name="email"
            onChange={e => this.setState({'email': e.target.value})}
            value={this.state.email} />
          <input
            placeholder="username"
            type="text"
            name="username"
            onChange={e => this.setState({'username': e.target.value})}
            value={this.state.username} />
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={e => this.setState({'password': e.target.value})}
            value={this.state.password} />
          <button  type="submit">Login</button>
        </form>
        <div>
          {this.showErrors()}
        </div>

      </div>
    )
  }
}

export default SignUp;
