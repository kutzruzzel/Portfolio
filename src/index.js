import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './pages/projects';
import Tech from './pages/tech';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 

  },
  {
    path: "/projects",
    element: <Projects/>, 
    
  },
  {
    path: "/technologies",
    element: <Tech/>, 
    
  },

 
]);

ReactDOM.render(
<RouterProvider router={router} />, document.getElementById('root'));