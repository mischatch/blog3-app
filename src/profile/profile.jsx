import React from 'react';
import PasswordChange from './passwordChange';
import PasswordReset from './passwordReset';

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
    debugger
    this.setState({ comp: e.target.value });
  }

  renderComponent(){
    switch (this.state.comp){
      case 'passChange':
        return <PasswordChange changePass={this.props.changePass} /> ;
      case 'passReset':
        return <PasswordReset resetPass={this.props.resetPass} /> ;
    }
  }


  render(){

    return(
      <div>
        <ul>
          <li><button value='passChange' onClick={this.componentPick}>Change Password</button></li>
          <li><button value='passReset' onClick={this.componentPick}>Reset Password</button></li>
          <li></li>
        </ul>
        <div>
          {this.renderComponent()}
        </div>
      </div>
    )
  }
}

export default Profile;
