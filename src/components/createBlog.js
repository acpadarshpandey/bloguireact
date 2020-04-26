import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBlog extends Component {

    constructor(props) {
        super(props);

        this.blog = this.blog.bind(this);
        this.author = this.author.bind(this);;
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Blog: '',
            Author: '',
    
        }
    }

    blog(e) {
        this.setState({
            Blog: e.target.value
        });
    }

    author(e) {
        this.setState({
            Author: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Blog: ${this.state.Blog}`);
        console.log(`Author: ${this.state.Author}`);



        const newBlog = {
            Blog: this.state.Blog,
            Author: this.state.Author,
        
        };

        axios.post('https://blog-backends.herokuapp.com/createBlog', newBlog)
            .then(res => console.log(res.data));
        
        this.setState({
            Blog: '',
            Author: '',
          
        })
    }
    

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Blog</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Blog </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Blog}
                                onChange={this.blog}
                                />
                    </div>
                    <div className="form-group">
                        <label>Author </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Author}
                                onChange={this.author}
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