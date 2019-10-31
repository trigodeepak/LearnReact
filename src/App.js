import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor() {
    super();
    this.counter = 0;
}
incrementCounter = () => {
    console.log("button clicked");
    this.counter += 1;
};
render() {
    return (
        <div>
            <button onClick={this.incrementCounter}> Click </button>
            <p>{this.counter}</p>
        </div>
    );
}
}

export default App;
