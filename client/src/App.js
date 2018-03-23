import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <ul>
        <Link to='/login'>Log In</Link>
        <Link to='/logout'>Log Out</Link>
        <Link to='/register'>Register</Link>
        <Link to='/jokes'>Jokes</Link>
        {this.props.authenticated ? <div>Logged In</div> : <div>Not Logged In</div>}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(App);
