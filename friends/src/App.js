import React from 'react';
import LogIn from './components/login'
import { Route, NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink exact to='/'>Form</NavLink>
      </nav>

      <main>
        <Route exact path='/' component={LogIn} />
      </main>
    </div>
  );
}

export default App;
