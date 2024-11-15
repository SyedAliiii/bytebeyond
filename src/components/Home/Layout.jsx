import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css';

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>      
    </>
  )
}
