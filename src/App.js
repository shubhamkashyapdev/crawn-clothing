import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { auth } from './firebase/firebaseUtils';

// pages //
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

// components //
import Header from './components/Header/Header';
import SignInOut from './pages/sing-in-sign-up/SignInSignUp';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null

  componentDidMount = () => {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount = () => {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>

        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign-in" component={SignInOut} />

        </Switch>

      </div>
    );
  }
}

export default App;
