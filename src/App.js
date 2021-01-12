import React from 'react';
import { Route, Switch, Router, Link, withRouter } from 'react-router-dom';

import './App.css';

// pages //
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

// components //




function App() {

  return (

    <div>


      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />

      </Switch>


    </div>


  );
}

export default App;
