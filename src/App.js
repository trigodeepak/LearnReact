import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    constructor() {
        super();
        const emp1 = {
            "empId": 100,
            "empName": "Jack",
            "age": 30,
            "salary": 50000,
            "image": "emp1.png",
            "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well"
        }
        const emp2 = {
            "empId": 101,
            "empName": "Jane",
            "age": 24,
            "salary": 40000,
            "image": "emp2.png",
            "achievements": "No major achievements so far"
        }
        this.empArr=[emp1,emp2]
        this.state={
            selectedEmp:null
        }
    }
    createCard(emp) {
        var note = null;
        var achievements=null;
        if (emp.age < 25) {
          note = <span className="text-info"> - Fresher</span>
        }
        if(this.state.selectedEmp==emp.empId){
            achievements=<p><i>{emp.achievements}</i></p>
        }
        return (
          <div key={emp.empId} className="card" style={{ "width": 200 }}>
            <img className="card-img-top" src={emp.image} height="200" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">{emp.empName}</h5>
              <p className="card-text">
                <span>Id: {emp.empId}</span><br />
                <span>Age: {emp.age}</span> {note}<br />
                <span>Salary: {emp.salary}</span><br />
              </p>
              {achievements}
              <button type="button" className="btn btn-primary">Edit</button> <button className="btn btn-success" onClick={()=>{
                 this.setState({selectedEmp:emp.empId}) 
              }}>View</button>
            </div>
          </div>
        )
      }
      
      render(){
          return (
            <div>
              <h3 className="text-center text-primary">Employee Details</h3>
              {this.empArr.map(emp => {return this.createCard(emp)})}
            </div>
          )
      }
}

export default App;
