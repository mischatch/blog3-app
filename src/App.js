import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import LoginFormContainer from './loginForm/loginFormContainer';
import SignUpContainer from './signUp/signUpContainer';
import HomeContainer from './home/homeContainer';
import NavigationContainer from './navigation/navigationContainer';
import ProfileContainer from './profile/profileContainer';
import PostEditContainer from './postEdit/postEditContainer';
import NotFound from './404/notFound';
import './App.css';


const App = () =>

      <Router>
        <div>
          <NavigationContainer />
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/login' component={LoginFormContainer} />
            <Route exact path='/signup' component={SignUpContainer} />
            <Route exact path='/profile' component={ProfileContainer} />
            <Route exact path='/posts/:postId' component={PostEditContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>


export default App;
