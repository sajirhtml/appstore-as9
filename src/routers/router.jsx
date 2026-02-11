import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../pages/Home';
import Loading from '../components/Loading';

const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayout,
        children:[
            {
                index:true,
                Component: Home,
                loader: () => fetch("/apps.json"),
                hydrateFallbackElement: Loading
            }
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