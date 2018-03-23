import React from 'react';
import { connect } from 'react-redux';

export default RestrictedComponent => {
  class Auth extends React.Component {
    componentDidMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <div>{this.props.authenticated ? <RestrictedComponent props={...this.props} /> : null}</div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.auth.authenticated,
    };
  };

    return connect(mapStateToProps)(Auth);
};