import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import Home from './Components/Home.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
