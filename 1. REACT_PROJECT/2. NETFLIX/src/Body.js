import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './page/Login'
import Browse from './page/Browse'
import { RouterProvider } from 'react-router-dom'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path:'/browse',
            element: <Browse/>
        }
    ])

    /*
     * We are creating the router using the createBrowseRouter and providing 
     * the router to application using the RouterProvider
    */
     return (
        <RouterProvider router ={appRouter}/>
    )
}

export default Body