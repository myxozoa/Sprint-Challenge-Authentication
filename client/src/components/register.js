import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import { reduxForm, Field } from 'redux-form';

class Regsister extends React.Component {
  componentDidMount() {
  }
  handleFormSubmit({ username, password }) {
    this.props.register(username, password, this.props.history);
  }

  renderAlert() {
    if (this.props.error) {
      return <h3>{this.props.error}</h3>
    }
    if(this.props.authenticated) {
      return <h3>You are already logged in</h3>;
    }
    return null;
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
        <fieldset>
          <label>Confirm Password:</label>
          <Field name='ConfirmPassword' component='input' type='text' />
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

Regsister = connect(mapStateToProps, { register })(Regsister);

export default reduxForm({
  form: 'login',
  fields: ['username', 'password', 'confirmPassword']
})(Regsister);
