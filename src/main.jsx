import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Component/Home.jsx'
import About from './About/Component/About.jsx'
import Contact from './Contact/Component/Contact.jsx'
import LogIn from './LogIn/Component/LogIn.jsx'
import Register from './LogIn/Component/Register.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"login",
        element:<LogIn/>
      },
      {
        path:"register",
        element:<Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
