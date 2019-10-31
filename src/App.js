import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
        counter: 0
    };
}
incrementCounter = () => {
    //this.state.counter += 1;  //trying to increment(or mutate) the state!
    this.setState({counter : this.state.counter + 1 }) //updating state using setState()
    console.log("Button Clicked," , this.state.counter, "times" );
};
render() {
    return (
        <div>
            <button onClick={this.incrementCounter}> Click </button>
            <p>{this.state.counter}</p>
        </div>
    );
}
}

export default App;
