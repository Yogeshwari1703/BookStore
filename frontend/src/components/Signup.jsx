import React from 'react';
import { Link } from 'react-router-dom';
import Login from "./login";
import { useForm } from 'react-hook-form';

function Signup() {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log('Form Data:', data);
        // Add your login logic here
      };

  return (
    <div className='h-screen flex items-center justify-center bg-white dark:bg-slate-800'>

      {/* Toggle checkbox */}
      <input type="checkbox" id="signup-modal" className="modal-toggle" defaultChecked />

      {/* Modal */}
      <div className="modal">
        <div className="modal-box dark:bg-slate-200 dark:text-white bg-white border-[2px] shadow-md p-5 rounded-md w-[400px]">
          {/* Close button using label for checkbox */}

          <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" htmlFor="signup-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-400">✕</Link>

          <h3 className="font-bold text-lg text-black">Sign Up</h3>

          {/* Name */}
          <div className='mt-4 space-y-2 text-black'>
            <span>Name</span>
            <br />
            <input type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-1 rounded-md outline-none bg-white shadow" 
              {...register('name', { required: true })}
              />
              <br/>
              {errors.name && (
                <span className="text-sm text-red-800">This field is required</span>
              )}
          </div>

          {/* Email */}
          <div className='mt-4 space-y-2 text-black'>
            <span>Email</span>
            <br />
            <input type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 rounded-md outline-none bg-white shadow" 
              {...register('email', { required: true })}
              />
              <br/>
              {errors.email && (
                <span className="text-sm text-red-800">This field is required</span>
              )}
          </div>

          {/* Password */}
          <div className='mt-4 space-y-2 text-black'>
            <span>Password</span>
            <br />
            <input type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 rounded-md outline-none bg-white shadow" 
              {...register('password', { required: true })}
              />
              <br/>
              {errors.password && (
                <span className="text-sm text-red-800">This field is required</span>
              )}
          </div>

          {/* Button + Link */}
          <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign Up</button>
            <p className='text-black text-xl'>
              Have account?
              <button className='underline text-blue-500 cursor-pointer ml-1'
               onClick={()=>document.getElementById("my_modal_3").showModal()}>
                Log in
              </button>
              <Login />
            </p>
          </div>
        </form>
        </div>
      </div>

    </div>
  );
}

export default Signup;
