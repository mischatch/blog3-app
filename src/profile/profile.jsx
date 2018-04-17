import { firebase } from '../firebase';
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

  componentDidMount(){
    const { onSetAuthUser } = this.props;
    firebase.auth.onAuthStateChanged(authUser => {
       authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
       });
  }

  componentPick(e){
    this.setState({ comp: e.target.value });
  }

  componentWillReceiveProps(nextProps){
    debugger
  }

  renderComponent(){
    switch (this.state.comp){
      case 'passChange':
        return <PasswordChange changePass={this.props.changePass} /> ;
      case 'passReset':
        return <PasswordReset resetPass={this.props.resetPass} /> ;
      case 'postCreate':
        return <PostForm
          createPost={this.props.createPost}
          createImages={this.props.createImages}
          addDataToPost={this.props.addDataToPost}
          history={this.props.history}
          /> ;
      default:
        return null;
    }
  }


  render(){

    return(
      <div>
        <h1>Profile Page</h1>
        <div className='profile-container'>
          <div className='profile-links'>
            <button value='passChange' onClick={this.componentPick}>Change Password</button>
            <br/>
            <button value='passReset' onClick={this.componentPick}>Reset Password</button>
            <br/>
            <button value='postCreate' onClick={this.componentPick}>Create new post</button>
          </div>
          <div>
            {this.renderComponent()}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
