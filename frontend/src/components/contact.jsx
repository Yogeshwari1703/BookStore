import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // You can add API call logic here
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-white dark:bg-slate-900'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-[2px] shadow-md p-5 rounded-md w-[400px] dark:bg-slate-200 dark:text-white"
      >
        <h3 className="font-bold text-lg text-black">Contact Us</h3>

        {/* Name */}
        <div className='mt-4 space-y-2 text-black'>
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-full px-3 py-1 rounded-md outline-none bg-white shadow"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="text-sm text-red-800">This field is required</span>
          )}
        </div>

        {/* Email */}
        <div className='mt-4 space-y-2 text-black'>
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-1 rounded-md outline-none bg-white shadow"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-800">This field is required</span>
          )}
        </div>

        {/* Message */}
        <div className='mt-4 space-y-2 text-black'>
          <span>Message</span>
          <textarea
            placeholder="Type your message"
            className="w-full px-3 py-1 rounded-md outline-none bg-white shadow"
            {...register('message', { required: true })}
          />
          {errors.message && (
            <span className="text-sm text-red-800">This field is required</span>
          )}
        </div>

        {/* Submit Button */}
        <div className='flex justify-center mt-6'>
          <button
            type="submit"
            className='bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
