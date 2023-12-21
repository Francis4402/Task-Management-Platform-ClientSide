import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import Routes from "./Components/Routes/Routes.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import {Toaster} from "react-hot-toast";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <Toaster position="top-center"/>
          <RouterProvider router={Routes} />
      </AuthProvider>
  </React.StrictMode>,
)
