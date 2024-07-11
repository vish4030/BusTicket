import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import './index.css'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import ErrorBoundary from './pages/ErrorBoundary.jsx'



const routes = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorBoundary />

  },
  {
    path:"/signup",
    element:<SignUp />,
    errorElement:<ErrorBoundary />
  },
  {
    path:"/login",
    element:<Login />,
    errorElement:<ErrorBoundary />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>,
)
