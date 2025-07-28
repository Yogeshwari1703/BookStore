import React from 'react'
import banner from "../../public/Books.png"

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 flex flex-col md:flex-row pt-20 pb-14 bg-white text-black dark:bg-slate-900 dark:text-white">
    <div className="w-full md:full md:w-1/2 order-2 md:order-1">
    <div className="space-y-12">
    <h1 className="text-4xl font-bold">Hello, welcomes here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
    <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!</p>
<label
  className="w-full px-3 py-1.5 
             border border-gray-700 
    dark:border-gray-700 
    focus-within:border-gray-400 
    dark:focus-within:border-gray-400 
    rounded-md flex items-center gap-2 
    dark:bg-slate-900 dark:text-white 
             transition-colors duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 text-gray-300 dark:text-gray-400"
  >
    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>

  <input
    type="text"
    placeholder="Email"
    className="grow bg-transparent border-none outline-none 
               focus:outline-none focus:ring-0 
               text-base placeholder-gray-400 dark:placeholder-gray-500 
               dark:text-white dark:bg-slate-900"
  />
</label>





    </div>
    <button className="btn btn-secondary mt-6">Get Started</button>
    </div>
    <div className="w-full md:full md:w-1/2 order-1 ml-20">
        <img src={banner} alt="Banner" /></div>
    </div>
    </>
  )
}

export default Banner