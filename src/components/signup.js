import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {

    constructor(props) {
        super(props);

    
        this.Email = this.email.bind(this);;
        this.Password=this.password.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
    
        }
    }

    email(e) {
        this.setState({
            email: e.target.value
        });
    }

    password(e) {
        this.setState({
            Password: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);



        const newUser = {
            email: this.state.email,
            password: this.state.password,
        
        };

        axios.post('http://localhost:4000/signup', newUser)
            .then(res => console.log(res.data));
        
        this.setState({
            email: '',
            password: '',
          
        })
    }
    

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Email </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.Email}
                                />
                    </div>
                    <div className="form-group">
                        <label>password </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.Password}
                                />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Create Blog" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}