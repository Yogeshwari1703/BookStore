import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-200 dark:text-white bg-white w-[400px]"> {/* adjust width here */}
          {/* ✕ Button */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-400"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg text-black mt-2">Login</h3>

            {/* email */}
            <div className="mt-4 space-y-2 text-black">
              <span>Email</span>
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
                <Link to="/Signup" className="underline text-blue-500">
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
