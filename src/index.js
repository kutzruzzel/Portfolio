import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './pages/projects';
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

 
]);

ReactDOM.render(
<RouterProvider router={router} />, document.getElementById('root'));