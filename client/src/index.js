import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import Jokes from './components/jokes';
import Logout from './components/logout';
import Register from './components/register';
import Auth from './components/auth';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <Router>
          <div>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Auth(Logout)} />
            <Route path="/register" component={Register} />
            <Route path="/jokes" component={Auth(Jokes)} />
          </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
