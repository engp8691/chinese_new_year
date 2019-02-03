import React, { Component } from 'react';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
  	let myArray = [1,2,3,4,5,6,7,8,9,10];
    return (
      <div className="App">
	  	<Wrapper numbers={myArray}/>
      </div>
    );
  }
}

export default App;
