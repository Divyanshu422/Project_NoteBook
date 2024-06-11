import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './page/Login'
import Browse from './page/Browse'
import { RouterProvider } from 'react-router-dom'


const Body = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        }
    ])
    return (
        <RouterProvider router ={router}/>
    )
}

export default Body