import React, { Component } from 'react';
import { db } from '../firebase';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // const { onSetUsers } = this.props;
    // db.onceGetUsers().then(snapshot =>
    //   onSetUsers(snapshot.val())
    // );
  }

  render(){
    const { users } = this.props;
    debugger
    return(
      <div>
        Home
      </div>
    )
  }
}

export default Home;
