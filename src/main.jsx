import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import ViewDetails from './components/ViewDetais/ViewDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`/feature.json`)
        
      },
      {
        path: '/feature/:id',
        element: <ViewDetails></ViewDetails>,
        // loader: ({params}) => fetch (`/feature.json/${params.id}`)
        loader: () => fetch (`feature.json`)
      },
      // {
      //   path: '/viewDetails',
      //   element: <ViewDetails></ViewDetails>,
      //   loader: () => fetch (`feature.json`)
      // },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
