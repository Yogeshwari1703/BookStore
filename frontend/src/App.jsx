// import React from 'react';
// import Home from './home/Home';
// import Courses from "./courses/Courses";
// import Signup from './components/signup';
// import ContactUs from "./contactus/contactus";
// import {Navigate, Route,Routes} from "react-router-dom";
// import {Toaster} from "react-hot-toast";
// import {useAuth} from "./context/AuthProvider";


// export default function App() {
  
//   const [authUser,setAuthUser]=useAuth();
//   console.log(authUser)
//   return (
//     <>
//     <div className="dark:bg-slate-900 dark:text-white">
//     <Routes>
//    <Route path="/" element={<Home />}/>
//    <Route
//   path="/courses"
//   element={
//     authUser ? (
//       <Courses />
//     ) : (
//       <Navigate to="/signup" state={{ from: "/courses" }} replace />
//     )
//   }
// />


//    <Route path="/signup" element={<Signup />}/>
//    <Route path="/contactus" element={<ContactUs />}/>

//     </Routes>
//     <Toaster />
//     </div>
//     </> 
//   );
// }


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Login from "./components/login";
import Signup from "./components/signup";
import ContactUs from "./contactus/contactus";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/courses"
          element={
            authUser ? (
              <Courses />
            ) : (
              <Navigate to="/login" state={{ from: "/courses" }} replace />
            )
          }
        /> */}

        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Toaster />
    </div>
  );
}
