import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);
    return (
        <div>
            <RouterProvider router={appRouter} />
            {/* <Login />
            <Browse /> */}
        </div>
    )
}

export default Body