import React, { useState, useEffect } from 'react';

import Card from "./cards"
// import list from "../../public/list.json"
import {Link} from "react-router-dom";
import axios from "axios";


function Course() {

  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res= await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/book`);
        console.log(res.data);
        setbook(res.data);
      }catch(error){
        console.log("error",error);
      }
    }
    getBook();
  },[])
  return (
    <>
    {/* <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white"> */}
    <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 py-3  bg-white text-black  dark:bg-slate-900 dark:text-white">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you <span className="text-pink-500">Here !:)</span>
        </h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores similique eos laborum at, totam illo veritatis suscipit? Quos voluptatibus, inventore dignissimos hic, velit cumque, adipisci itaque impedit nisi aperiam consectetur.</p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>

      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item)=>(
            <Card key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course