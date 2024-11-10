import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="d-flex layout bg-dark text-light">
      <div className="border-end px-2 overflow-y-auto" style={{  flexBasis: "20%", height: "100vh" }}>
        <Sidebar/>
      </div>
      <div className='' style={{  flexBasis: "80%" }}>
        <div style={{  height: "90%" }}>
          <Outlet/>
        </div>
        <div style={{  height: "10%" }}>
          <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}
