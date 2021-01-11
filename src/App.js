import React from 'react';
import { Route, Switch, Router, Link, withRouter } from 'react-router-dom';

import './App.css';

// pages //
import Homepage from './pages/homepage/Homepage';

// components //



function App() {

  const BackToHome = () => {
    return (
      <button style={{ fontSize: '1.2rem', padding: '.5em .8em' }}>
        <Link to="/">Home</Link>
      </button>

    )
  }

  return (

    <div>
      {/* back to home */}
      <BackToHome />

      <Switch>
        <Route exact path="/" component={Homepage} />

      </Switch>


    </div>


  );
}

export default App;
