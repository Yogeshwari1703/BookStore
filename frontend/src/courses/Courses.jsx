import React from 'react'
import Navbar from '../components/Navbar'
import Course from "../components/course"
import Footer from '../components/footer'
import list from "../../public/list.json"

function Courses() {
  // console.log(list)
  return (
    <>
    <Navbar />
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <Course/>
      <hr className="mt-10" />
    </div>
    
    <Footer/>
    </>
  )
}

export default Courses
