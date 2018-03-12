import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginForm from './loginForm/loginForm';
import SignUp from './signUp/signUp';
import Home from './home/home';
import Navigation from './navigation/navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <h1>Blog</h1>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/signup' component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
