import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home/Home";
import Blog from "../shared/pages/Blog";
import Login from "../shared/pages/Login";
import Register from "../shared/pages/Register";
import Errorpage from "../shared/pages/Errorpage";

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
            // {
            //     path: 'errorpage',
            //     element: <Errorpage></Errorpage>
            // }
        ]
    }
])
export default router;