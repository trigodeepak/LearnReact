import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

var course = [  {id: 1, name: "Angular", educator: "Rob"},
                {id: 2, name: "ReactJS", educator: "John"},
                {id: 3, name: "Ajax", educator: "Mack"}
            ];

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = { courseData: course, selected: false };
        console.log("Initialization Phase: 'constructor()' executed");
        
    }
    componentWillMount = () => {
        console.log("Mounting Phase: 'componentWillMount()' executed");  
    }
    
    render = () => {
        var users = this.state.courseData;
        console.log("Mounting Phase: 'render()' executed");
        return (
        <div>
            <h4>UI Courses list</h4>
            <div> { 
                users.map((userDetails)=> { 
                    return (<div key={userDetails.id}>
                        <b>Course: </b>{userDetails.name} <br/> 
                        <b>Educator: </b>{userDetails.educator} <br/>
                        <button onClick={this.clickHandler}>Details</button><br/><br/>
                    </div>);
                })}
            </div>
            <button onClick={this.exitComponent}>Exit</button>
        </div>
        );  
    }
    componentDidMount = () => {
        console.log("Mounting Phase: 'componentDidMount()' executed");  
    }
    clickHandler = () => {
        console.log("Details button is clicked, state will change...");
        this.setState({ selected: true });
    }
    exitComponent = () => {
        console.log("Exit button is clicked, component will be destroyed");
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    componentWillUnmount = () => {
        console.log("Un-Mounting Phase: 'componentWillUnmount()' executed");
    }
}

export default App;
