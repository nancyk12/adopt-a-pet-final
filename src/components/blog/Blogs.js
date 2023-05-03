import React from "react";
import BlogsCard from "./BlogsCard";
import { useState } from "react";


function Blogs(props) {
	console.log(props);
	return (
	<>	
	  <section>
        <h1 className="blog-title">Pet Adoption Success Stories Blog</h1>
          <div className="blog-list">
		    <div>
			   {/* <h2>{props.name}</h2> */}
			    {props.blogsProps.map((blog) => {
				  return( 
				    <BlogsCard 
					   key={blog.id} 
					   blog={blog} 
					   setShouldRefresh={props.setShouldRefreshProps} 
				    />);
			
			})} 
			{/* <BlogsCard/>  */}
		  </div>
	  </div>
    </section>  
    </>		
	);
}

export default Blogs;



      



 