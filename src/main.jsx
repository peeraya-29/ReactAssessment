// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import Home from './component/Home';
import HomeAdmin from './component/HomeAdmin';
import HomeOwner from './component/HomeOwner';
import HomeUser from './component/HomeUser';

const router = createBrowserRouter([
  
  { path: '/',
  element: <Home />},

  {path: '/HomeAdmin',
  element: <HomeAdmin/>},

  {path: '/HomeOwner',
  element: <HomeOwner/>},

  {path: '/HomeUser',
  element: <HomeUser/>},

])

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

