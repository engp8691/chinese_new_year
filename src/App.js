import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducer from './reducers'
import Wrapper from './Wrapper';

const store = createStore(combinedReducer)

class App extends Component {
  render() {
    return (
      <div className="App">
			<Provider store={store}>
			  	<Wrapper />
			</Provider>
      </div>
    );
  }
}

export default App;
