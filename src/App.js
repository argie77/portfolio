import React from "react";
import "./index.css";
// App.js will be the parent which means we have to import the routes folder
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"

//we have to import the below so it show up the browser. we are pulling the routes 
import { Route, Routes } from "react-router-dom";

function App() {
  //routing the routes to the fuction - routes is the function from react dom
  //inside the Route we have to call each of the pages (routes)
  //for calling our homepage inside the Route we have to do the element...
  //...so the pages will show up
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
