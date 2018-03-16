import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './loginForm/loginFormContainer';
import SignUp from './signUp/signUp';
import HomeContainer from './home/homeContainer';
import NavigationContainer from './navigation/navigationContainer';
import NotFound from './404/notFound';
import './App.css';

const App = () =>

      <Router>
        <div>
          <NavigationContainer />
          <h1>Blog</h1>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/login' component={LoginFormContainer} />
            <Route exact path='/signup' component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>


export default App;
