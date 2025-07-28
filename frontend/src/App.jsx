import React from 'react';
import Home from './home/Home';
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import ContactUs from "./contactus/contactus";
import {Route,Routes} from "react-router-dom"


export default function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/courses" element={<Courses />}/>
   <Route path="/signup" element={<Signup />}/>
   <Route path="/contactus" element={<ContactUs />}/>

    </Routes>
    </div>
    </> 
  );
}
