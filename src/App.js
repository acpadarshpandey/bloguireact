import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBlog from "./components/createBlog";
import editBlog from "./components/editBlog";
import Blogslist from "./components/bloglist";
import Delete from "./components/delete"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to="/" className="navbar-brand">ACP Blog</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Blogs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Blog</Link>
                </li>
               
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Blogslist} />
          <Route path="/edit/:id" component={editBlog} />
          <Route path="/create" component={CreateBlog} />
          <Route path="/delete" component={Delete}/>
        </div>
      </Router>
    );
  }
}

export default App;