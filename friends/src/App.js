import React from 'react';
import LogIn from './components/login'
import { Route, NavLink } from 'react-router-dom';
import Friends from './components/friends';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink exact to='/'>Form</NavLink>
        <NavLink exact to='/friends'>Friends</NavLink>
      </nav>

      <main>
        <Route exact path='/' component={LogIn} />
        <Route exact path='/friends' component={Friends} />
      </main>
    </div>
  );
}

export default App;
