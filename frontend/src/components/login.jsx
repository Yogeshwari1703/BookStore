import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider"; 
// import {useNavigate } from 'react-router-dom';

import { useLocation, useNavigate } from 'react-router-dom';


function Login({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const [authUser, setAuthUser] = useAuth();

  
const location = useLocation();
const navigate = useNavigate();
// const from = location.state?.from || "/courses"; // fallback
const from = location.state?.from || "/";



      
  const onSubmit = async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    };
    await axios
    .post(`{import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/login`,userInfo)
    .then((res)=>{
      console.log(res.data)
        if(res.data){
          toast.success("log in successful");
          setAuthUser(res.data.user);  
           localStorage.setItem("authUser", JSON.stringify(res.data.user)); 
          document.getElementById("my_modal_3").close();


            navigate(from, { replace: true });
        //  setTimeout(()=>{
          //  window.location.reload();
          //  localStorage.setItem("Users",JSON.stringify(res.data.user));
        //  },3000)
        }
      
    })
    .catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: "+err.response.data.message);
        setTimeout(()=>{},2000);
      }
    });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-200 dark:text-white bg-white w-[400px]"> {/* adjust width here */}
          {/* ✕ Button */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              type="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-400"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-black mt-2">Login</h3>

            {/* email */}
            <div className="mt-4 space-y-2 text-black">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 rounded-md outline-none bg-white shadow"
                {...register('email', { required: true })}
              />
              <br/>
              {errors.email && (
                <span className="text-sm text-red-800">This field is required</span>
              )}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2 text-black">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-1 rounded-md outline-none bg-white shadow"
                {...register('password', { required: true })}
              />
              <br/>
              {errors.password && (
                <span className="text-sm text-red-800">This field is required</span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4 items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p className="text-black text-sm">
                Not registered?{' '}
                <Link to="/Signup" className="underline text-blue-500 cursor-ponter">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
