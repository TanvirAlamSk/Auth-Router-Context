import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";

export const router = createBrowserRouter([
    {
        path: "/", element: <Home></Home>
    },
    {
        path: "/footer", element: <Footer></Footer>
    }
])