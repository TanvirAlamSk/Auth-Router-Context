import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main/Main";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Orders from "../components/Orders/Orders";

// import Main from "../layouts/main";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: ([
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/orders", element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: "/home", element: <Home></Home>
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/registration", element: <Registration></Registration>
            }
        ])
    },
])