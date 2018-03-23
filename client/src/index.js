import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import Provider from 'react-redux';

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <Router path="/" component={App} />
        <Router path="/login" component={login} />
        <Router path="/logout" component={Auth(logout)} />
        <Router path="/register" component={register} />
        <Router path="/jokes" component={Auth(jokes)} />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
