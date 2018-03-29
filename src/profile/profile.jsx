import React from 'react';
import PasswordChange from './passwordChange';
import PasswordReset from './passwordReset';
import PostForm from '../postForm/postForm';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      comp: '',
    };

    this.componentPick = this.componentPick.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  // componentDidMount(){
  //   if(!this.props.loggedIn){
  //     this.props.history.push('/');
  //   }
  // }

  componentPick(e){
    this.setState({ comp: e.target.value });
  }

  renderComponent(){
    switch (this.state.comp){
      case 'passChange':
        return <PasswordChange changePass={this.props.changePass} /> ;
      case 'passReset':
        return <PasswordReset resetPass={this.props.resetPass} /> ;
      case 'postCreate':
        return <PostForm  /> ;
    }
  }


  render(){

    return(
      <div>
        <h1>Profile Page</h1>
          <br/>
          <button value='passChange' onClick={this.componentPick}>Change Password</button>
          <br/>
          <button value='passReset' onClick={this.componentPick}>Reset Password</button>
          <br/>
          <button value='postCreate' onClick={this.componentPick}>Create new post</button>
        <div>
          {this.renderComponent()}
        </div>
      </div>
    )
  }
}

export default Profile;
