import React from 'react';
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/footer'
import FreeBooks from '../components/freeBooks'

function home() {
  return (
     <>
    <div><Navbar/></div>
    <div><Banner/></div>
    <div><FreeBooks/></div>
 
    <div><Footer/></div>
    </>
  )
}

export default home
