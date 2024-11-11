import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLayout, AdminDashboard, AdminComments, AdminAuthors } from './components/Admin/Index';
import { AuthorLayout, AuthorDashboard, AuthorComments } from './components/Author/Index';
import { Layout, Blogs, ViewBlog, Home } from './components/Home/Index';
import Login from './components/Home/Login';
import Register from './components/Home/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
        </Route>
          <Route path='/blog' element={<ViewBlog />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='author' element={<AdminAuthors />} />
          <Route path='comments' element={<AdminComments />} />
        </Route>
        <Route path='/author' element={<AuthorLayout />}>
          <Route index element={<AuthorDashboard />} />
          <Route path='comments' element={<AuthorComments />} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  );
};

export default App;