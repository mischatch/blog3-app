import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import LoginFormContainer from './loginForm/loginFormContainer';
import SignUpContainer from './signUp/signUpContainer';
import HomeContainer from './home/homeContainer';
import NavigationContainer from './navigation/navigationContainer';
import ProfileContainer from './profile/profileContainer';
import PostEditContainer from './postEdit/postEditContainer';
import NotFound from './404/notFound';
import './App.css';
import { AuthRoute, ProtectedRoute } from './util/route_util';

const browserHistory = createBrowserHistory();


const App = () =>

      <Router hitory={browserHistory}>
        <div>
          <NavigationContainer />
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpContainer} />
            <ProtectedRoute exact path='/profile' component={ProfileContainer} />
            <ProtectedRoute exact path='/posts/:postId' component={PostEditContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>


export default App;
