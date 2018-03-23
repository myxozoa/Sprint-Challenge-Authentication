import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { reduxForm, Field } from 'redux-form';

class SignIn extends React.Component {
  handleFormSubmit({ username, password }) {
    this.props.login(username, password, this.props.history);
  }

  renderAlert() {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Username:</label>
          <Field name='username' component='input' type='text' />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name='password' component='input' type='text' />
        </fieldset>
        <button action='submit'>Log In</button>
        {this.renderAlert()}
      </form>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated,
  }
}

Login = connect(mapStateToProps, { login })(Login);

export default reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(Login);
