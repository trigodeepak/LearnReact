import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            title : '',
            author : '',
            genre : '',
            formErrors: {
                titleError : '',
                authorError : '',
                genreError : ''
            },
            fieldValidity: {
                titleValid : false,
                authorValid : false,
                genreValid : false
            },
            formValid: false,
            successMessage: ''
        };
    }
    validateTitle = (e) => {
        const title = e.target.value;
        console.log("Is this even called"+title);
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ title: e.target.value });

        if (title.length < 4) {
            formErrors.titleError = "Title must be at least 4 chars";
            fieldValidity.titleValid = false;
        }
        else {
            formErrors.titleError = "";
            fieldValidity.titleValid = true;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.titleValid && fieldValidity.authorValid && fieldValidity.genreValid })
    }
    validateAuthor = (e) =>{
        const author = e.target.value;
        let formErrors = this.state.formErrors;
        let fieldValidity = this.state.fieldValidity;
        this.setState({ author : e.target.value});
        if (author.length < 3) {
            formErrors.authorError = "Author must be at least 3 chars";
            fieldValidity.authorValid = false;
        }
        else {
            formErrors.authorError = "";
            fieldValidity.authorValid = true;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.titleValid && fieldValidity.authorValid && fieldValidity.genreValid })
    }
    validateGenre = (e) =>{
        const genre = e.target.value;
        let formErrors = this.state.formErrors;
        let fieldValidity = this.state.fieldValidity;
        this.setState({ genre : e.target.value});
        if (genre == "") {
            formErrors.genreError = "Please select a genre";
            fieldValidity.genreValid = false;
        }
        else {
            formErrors.genreError = "";
            fieldValidity.genreValid = true;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.titleValid && fieldValidity.authorValid && fieldValidity.genreValid })
    }
    
    update = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            this.setState({ successMessage: "Book is added" });
        }else{
            this.setState({ successMessage: "" });
        }
    }
    render() {
        return (
            <div style={{width:500, margin:'0px auto'}}>
                <h3 className="text-center">Add a Book</h3>
                <form >
                    <div className="form-group">
                        <label>Title : </label>
                        <input className="form-control" value={this.state.title} onChange={this.validateTitle}></input>
                    </div>
                    <span className="text-danger">{this.state.formErrors.titleError}</span>
                    <div className="form-group">
                        <label>Author : </label>
                        <input className="form-control" value={this.state.author} onChange={this.validateAuthor}></input>
                    </div>
                    <span className="text-danger">{this.state.formErrors.authorError}</span>
                    <div className="form-group">
                        <label>Genre : </label>
                        <select className="form-control" value={this.state.genre} onChange={this.validateGenre}>
                            <option value = "">Select</option>
                            <option value = "MT">Mystry Thriller</option>
                            <option value = "F">Fiction</option>
                            <option value = "NF">Non Fiction</option>
                        </select>
                    </div>
                    <span className="text-danger">{this.state.formErrors.genreError}</span>
                    
                    <button type="button" onClick={this.update} className="btn btn-success" disabled={!this.state.formValid}>Update</button><br/>
                    <span className="text-success">{this.state.successMessage}</span>
                </form>
            </div>
        );
    }
}

export default App;
