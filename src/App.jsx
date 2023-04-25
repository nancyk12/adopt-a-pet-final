import React from "react";
import ReactDom from 'react-dom/client';
import "./App.css";
import  { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";
import NavBar from "./components/NavBar";
//import Search from "./components/Search";
//import Form from "./components/Form";
import Cards from "./components/Cards";
import Home from "./pages/Home";
import About from "./pages/About";
import Pets from "./pages/Pets/Pets";
import PetDetail from "./pages/Pets/PetDetail";
import Layout from "./components/Layout"

//import Login from "./components/Login";




function App() {

  return (
	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pets" element={<Pets />} />
          <Route path="pets/:id" element={<PetDetail />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
	)		
			
}

	

export default App;