import React from "react";
import ReactDom from 'react-dom/client';
import axios from "axios";
import "./App.css";
import  { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";
import Home from "./pages/Home";
import About from "./pages/About";
import Pets, { loader as petsLoader } from "./pages/Pets/Pets";
import PetDetail, { loader as petDetailLoader } from "./pages/Pets/PetDetail";
import Layout from "./components/Layout"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
import Error from "./components/Error";
import Blogs from "./components/blog/Blogs";
import EditBlog from "./components/blog/EditBlog";
import AuthRequired from "./components/AuthRequired";
import Favorites from "./pages/Pets/Favorites";
//import Login from "./components/Login";




function App() {
  const [blogs, setBlogs] = useState([]);
	const [shouldRefresh, setShouldRefresh] = useState(false);

	const url = "http://localhost:5005";
	//useEffect first argument, takes in an anonymous callback function. second argument, dependency array
	useEffect(() => {
		const fetchData = async () => {
			// fetch('url', { method: "POST"})
			//axios will parse the response from our backend back to us so we don't need response.json()
			const response = await axios.get(`${url}/blogs/all-blogs`);
			if (response.data.success) {
				setBlogs(response.data.blogs);
			}
		};
		fetchData();
	}, [shouldRefresh]);


  return (
	
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />


          <Route 
              path="blog" 
              element={<Blogs
              blogsProps={blogs}
							setShouldRefreshProps={setShouldRefresh}
						/>
					}
				/>
          <Route
						path="edit-blog/:id"
						element={
							<EditBlog
								blogsProps={blogs}
								setShouldRefreshProps={setShouldRefresh}
							/>
						}
					/>
          <Route 
              path="pets" 
              element={<Pets />} 
              errorElement={<Error />}
              
          />
          {/* :id is the params name */}
          <Route 
              path="pets/:id" 
              element={<PetDetail />} 
              errorElement={<Error />}
              
          />

          <Route
            path="favorites"
            element={<Favorites />}
            errorElement={<Error/>}
          /> 

         
          
          {/* <Route path="*" element={<NotFound/>}/> */}

        </Route>

       <Route element={<AuthRequired />}>
         <Route path="protected" element={<h1>Super secret info here</h1>} />
       </Route>
    </Routes>
 
	)		
			
}

	

export default App;