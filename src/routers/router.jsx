import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';

const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayout,
        children:[

        ]
    },
    {
        path:"/auth",
        Component: AuthLayout,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }
        ]
    }
])

export default router;