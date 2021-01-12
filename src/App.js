import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import './App.css';

// pages //
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

// components //
import Header from './components/Header/Header';
import SignInOut from './pages/sing-in-sign-up/SignInSignUp';


function App() {

  return (
    <div>

      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/sign-in" component={SignInOut} />

      </Switch>

    </div>
  );
}

export default App;
