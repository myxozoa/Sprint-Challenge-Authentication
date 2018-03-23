import axios from 'axios';
// Fixes an issue with axios and express-session where sessions
// would not persist between routes
axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:5000';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_JOKES = 'GET_JOKES';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/api/users`, { username, password })
      .then(() => {

        dispatch({
          type: USER_REGISTERED
        });
        history.push('/login');
      })
      .catch(() => {
        dispatch(authError('Failed to register user'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/api/login`, { username, password })
      .then((result) => {
        dispatch({
          type: USER_AUTHENTICATED
        });
        localStorage.setItem('user-token', result.data.token);
        history.push('/jokes');
      })
      .catch(() => {
        dispatch(authError('Incorrect username/password combo'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/logout`)
      .then(() => {
        dispatch({
          type: USER_UNAUTHENTICATED
        });
        localStorage.removeItem('user-token');
      })
      .catch(() => {
        dispatch(authError('Failed to log you out'));
      });
  };
};

export const getJokes = () => {
  const token = localStorage.getItem('user-token');
  return dispatch => {
    axios
      .get(`${ROOT_URL}/api/jokes`, { headers: {authorization: token }})
      .then(response => {
        dispatch({
          type: GET_JOKES,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(authError('Failed to fetch jokes'));
      });
  };
};

