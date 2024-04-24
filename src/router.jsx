import { createBrowserRouter } from "react-router-dom";
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from "./views/Registro";
import Red_Joven from "./views/Red_joven";
import Contactanos from "./views/Contactanos";

const router=createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children:[
            {
                path:'/Inicio',
                element:<Inicio />
            }]
        },
            {
                path:'/Red_joven',
                element:<Red_Joven/>
            },
            {
                path:'/Contactanos',
                element:<Contactanos/>
            },
            
    {
        path:'/auth',
        element: <AuthLayout />,
        children:[
            {
                path: '/auth/Login',
                element: <Login/>
            },
            {
                path: '/auth/Registro',
                element: <Registro />
            }
        ]
    }

])

export default router