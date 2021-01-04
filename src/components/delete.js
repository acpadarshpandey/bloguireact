import React from "react";
import { Link } from "react-router-dom";

const Delete=()=>{
    return(
        <div>
            <h1> Blog is Deleted!!!!!!!</h1>
           <Link to="/" > <button > Back To Home</button></Link> 
        </div>
    )
}

export default Delete;