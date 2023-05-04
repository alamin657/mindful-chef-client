import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home/Home";
import Blog from "../shared/pages/Blog";
import Login from "../shared/pages/Login";
import Register from "../shared/pages/Register";
import Errorpage from "../shared/pages/Errorpage";
import Review from "../Home/Review";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'details/:id',
            element: <PrivateRoute><Review></Review></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/chefdetails/${params.id}`)
            // loader: ({ params }) => fetch(`https://mindful-chef-server-alamin657.vercel.app/chefdetails/${params.id}`)


        }

        ]

    },


])
export default router;