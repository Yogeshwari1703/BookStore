import React,{useState,useEffect} from 'react';
import axios from "axios";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../public/list.json"

import Cards from "./cards"

function FreeBooks() {

     const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data.filter((data)=>data.category==="free"));
        setbook(res.data);
      }catch(error){
        console.log("error",error);
      }
    }
    getBook();
  },[])



    // const filterData=list.filter((data)=>data.category==="free");
    // console.log(filterData);
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
        <h1 className="font-semi-bold text-xl pb-4 text-black dark:text-white">Free Offered Courses</h1>
        <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
        </div>
    <div>
      <Slider {...settings}>
            {book.map((item) => (
              
              <Cards item={item} key={item.id} />
             
            ))}
      </Slider>
    </div>
     <hr className="mt-10" />
      </div>
        
    </>
  );
}

export default FreeBooks