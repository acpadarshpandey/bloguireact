import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"



export default class BlogsLists extends Component {
   state = {BlogLists: []};
    
    componentDidMount=()=> {
        axios.get('https://blog-backends.herokuapp.com/')
            .then(response => {
                this.setState({ BlogLists: response.data.BlogList });
            })
            .catch(function (error){
                console.log(error);
            });

      
            
    }   
    render() {
        return (
        <div>
            {
            this.state.BlogLists.map((blog)=>{
                return(<div style={{margin:"auto"}}>
                     <div class="card" >
                    <div class="card-body">
                      <h5 class="card-title">Blogs</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{blog.Author}</h6>
                      <p class="card-text">{blog.Blog}</p>
                      <Link to="/delete">      <button onClick={()=>{
                          const id=blog._id;
                          axios.delete(`https://blog-backends.herokuapp.com/blogDelete/${id}`)
                        .then(() => 
                          { console.log("deletion done")
                    
                           })
                        
                      }}>  Delete </button> </Link>
                      
                    </div>
                  </div>
                </div>
                   
                )
            })
             
         

    } 
        </div>
        
        )
          
    }
}