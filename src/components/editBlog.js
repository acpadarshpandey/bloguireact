import React, { Component } from 'react';
import axios from 'axios';

export default class EditBlog extends Component {
    
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


    componentDidMount() {
        axios.get('https://blog-backends.herokuapp.com/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    blog: response.data.blog,
                    author: response.data.author,
                    
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            Blog: this.state.Blog,
           Author: this.state.Author,
            
        };
        console.log(obj);
        axios.post('https://blog-backends.herokuapp.com/updateBlog'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Blog</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Blog: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Blog}
                                onChange={this.blog}
                                />
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Author}
                                onChange={this.author}
                                />
                    </div>
                   
    
                       

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

