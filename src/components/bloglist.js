import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from "bootstrap/dist/css/bootstrap.min.css";




const Blog = props => (
    <tr>
        <td>{props.Post.Blog}</td>
        <td>{props.Post.Author}</td>
        <td>
            <Link to={"/edit/"+props.Post._id}>Edit</Link>
        </td>
    </tr>
)

export default class BlogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {BlogList: []};
    }
    componentDidMount() {
        axios.get('https://blog-backends.herokuapp.com/')
            .then(response => {
                this.setState({ BlogList: response.data.BlogList });
            })
            .catch(function (error){
                console.log(error);
            })
            
    }
    blogList() {
        return this.state.BlogList.map(function(currentBlog, i){
            return <Blog Post={currentBlog} key={i} />;
        })
    }
  
    
        
        
    
    render() {
        return (<div>
             {/* <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
               {this.blogList()}
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card> */}
         <div>{this.blogList()}</div>

         
        </div>
        
        )
          
    }
}