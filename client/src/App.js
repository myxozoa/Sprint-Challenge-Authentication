import React, { Component } from 'react';
import './App.css';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);


class App extends Component {
  render() {
    return (
      <div />
    );
  }
}

export default App;
