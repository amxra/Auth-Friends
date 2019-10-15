import React from 'react';
import LogIn from './components/login'
import { Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import Friends from './components/friends';
import NewFriend from './components/newfriend';


import './App.css';

export function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink exact to='/'>Form</NavLink>
        <NavLink exact to='/friends'>Friends</NavLink>
        <NavLink to='newFriend' >New Friend</NavLink>
      </nav>

      <main>
        <Route exact path='/' component={LogIn} />
        <Route path='/friends' render={props => withAuthCheck(Friends, props) } />
        <Route path='/newFriend' render={props => withAuthCheck(NewFriend, props) } />

      </main>
    </div>
  );
}
function withAuthCheck (Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  else {
    return <Redirect to='/' />;
  }
}

export default withRouter(App);